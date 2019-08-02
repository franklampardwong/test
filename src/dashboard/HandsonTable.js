import React from 'react';
import { HotTable } from '@handsontable/react';
import { connect } from 'react-redux';
import 'handsontable/dist/handsontable.full.css';
import { reportConstants } from '../_constants';

class HandsonTable extends React.Component {

 
    constructor(props) {
      super(props);
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
          if(changes!==null){
            console.log(props.updatedRows);
            const newUpRows = Object.assign([],props.updatedRows);
            newUpRows.push(changes[0][0]);
            //this.setState({ updatedRows:newUpRows });
            props.setUpdatedRows(newUpRows);
          }
            
          
          
          console.log(source);
        }
      };
    }
    
    
    render() {
      return (
        <div>
          <HotTable
            id="hot"
            colHeaders={this.props.colHeaders}
            data={this.data}
            columns={this.props.gridColumn}
            settings={this.settings}
            columnSorting={true}
            
            
            />
        </div>
      );
    }
  }
  const mapStateToProps = (state) =>{

    return{
      rows:state.gridReducer.rows,
      gridColumn:state.gridReducer.gridColumn,
      colHeaders:state.gridReducer.colHeaders,
      updatedRows:state.gridReducer.updatedRows,
      reportKey:state.gridTitleReducer.reportKey,
    }
  }
  const mapDispatchToProps = (dispatch)=>{
    return {
        //updateRows : (rows)=> dispatch ({type:'ROWS_UPDATE',value:{rows}}),
        setUpdatedRows : (updatedRows) => dispatch ({type : reportConstants.SET_UPDATED_ROWS,value:{updatedRows}}),
        //updateRow :(id, updated) => dispatch ({type : 'ROWS_UPDATE',value:{id,updated}}),
        //addRow : (row)=> dispatch ({type:'ROW_ADD',value:{row}}),
        //sortRows : (rows)=>dispatch({ type : 'ROWS_SORT',value :{rows}}),
        //filterRows : (rows)=>dispatch ({type : 'ROWS_FILTER',rows})
  
    }
  };
  export default connect(mapStateToProps,mapDispatchToProps)(HandsonTable);  