import React from 'react';
import { HotTable } from '@handsontable/react';
import { connect } from 'react-redux';
import 'handsontable/dist/handsontable.full.css';
import { reportConstants } from '../_constants';
import Button from '@material-ui/core/Button';
import '../css/App.css';
import { budgetService } from '../_services';

class HandsonTable extends React.Component {

 
    constructor(props) {
      super(props);
      this.state={
        validate:true
      }
      const newRows = Object.assign([], this.props.rows);
      if (props.reportKey==='Clu05'){
        for(let i=0;i<newRows.length;i++){
          const row = Object.assign({},newRows[i]);
          row.sum="=SUM(H"+(i+1)+":U"+(i+1)+")";
          newRows[i]=row;
        }    
      }else if (props.reportKey==='Clu11'){
        for(let i=0;i<newRows.length;i++){
          const row = Object.assign({},newRows[i]);
          row.sum="=SUM(I"+(i+1)+":V"+(i+1)+")";
          newRows[i]=row;
        }   
      }
      
      this.data = newRows;
      this.settings = {
        rowHeaders: true,
        fixedColumnsLeft: 7,
        filters: true,
        dropdownMenu: true,
        contextMenu: true,
        licenseKey: 'non-commercial-and-evaluation',
        formulas:true,
        afterChange:function( changes, source ) {
          
          if(source=='edit'){
            
            const row =changes[0][0];
            const updated=changes[0][1];
            const value = changes[0][3];
            let id = this.getDataAtRow(row)[0];
            const temp ={[updated]:value};
            if (id == null ){
              console.log("new".concat(props.newRows.length+1));
              id = "new".concat(props.newRows.length+1);
              this.setDataAtCell(row,0,id);
              props.addRow("new".concat(props.newRows.length+1));
            }
            props.updateCell(id,temp);
            
          }
        }, 
        height: 520,
        
      };
    }
    handleSave=(event)=>{
      this.refs.table.hotInstance.validateCells((valid) =>{
        
        this.setState({validate:valid});
        if(valid){
          const tempRows =Object.assign([],this.props.rows);
          const tempId={id:''};
          for (let i=0;i<this.props.newRows.length;i++){
            console.log(this.props.newRows[i]);
            //tempRows.map(r=>(r.id===this.props.newRows[i])?{...r, tempId}: r);
            tempRows.map(r=>(r.id==this.props.newRows[i])?r.id="": r);
          }
          console.log(tempRows);
          
          budgetService.saveData11(tempRows)
          .then(result=>{
                console.log(result);
            },error => {
                console.log(error);
            }
          ); 
        }
        
      });
  }
    
    render() {
      return (
        <div>
         
        <div >
          <HotTable
            id="hot"
            ref={'table'}
            colHeaders={this.props.colHeaders}
            data={this.data}
            columns={this.props.gridColumn}
            settings={this.settings}
            columnSorting={true}
           
            
            
            />
           
        </div>
          
          <div className="saveButtonDiv"><Button variant="contained" className="saveButton" color="primary"  onClick={this.handleSave} size="large">Save</Button></div>
        </div>
      );
    }
  }
  const mapStateToProps = (state) =>{

    return{
      rows:state.gridReducer.rows,
      gridColumn:state.gridReducer.gridColumn,
      colHeaders:state.gridReducer.colHeaders,
      newRows:state.gridReducer.newRows,
      reportKey:state.gridTitleReducer.reportKey,
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
        //updateRows : (rows)=> dispatch ({type:'ROWS_UPDATE',value:{rows}}),
        setUpdatedRows : (updatedRows) => dispatch ({type : reportConstants.SET_UPDATED_ROWS,value:{updatedRows}}),
        updateCell :(id, updated) => dispatch ({type : reportConstants.CELL_UPDATE,value:{id,updated}}),
        addRow : (id)=> dispatch ({type:reportConstants.ROW_ADD,value:{id}}),
        //sortRows : (rows)=>dispatch({ type : 'ROWS_SORT',value :{rows}}),
        //filterRows : (rows)=>dispatch ({type : 'ROWS_FILTER',rows})
  
    }
  };
  export default connect(mapStateToProps,mapDispatchToProps)(HandsonTable);  