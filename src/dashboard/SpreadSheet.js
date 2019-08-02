import React  from 'react';
import ReactDataGrid from "react-data-grid";
import FormDialog from './FormDialog';
import { Toolbar,Data } from "react-data-grid-addons";
//import "./css/index.css";
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import 'bootstrap/dist/css/bootstrap.css';
import NumericEditor from './NumericEditor';



class SpreadSheet extends React.Component {
state={
    filters:{}
    
};

constructor(props){
    super(props);
    
    /* const newRows = Object.assign([], this.props.rows);
    
       for(let i=0;i<newRows.length;i++){
         const row = Object.assign({},newRows[i]);
         row.updateButton= <FormDialog row={row} onClick={this.handleUpdateFromChild}>Update</FormDialog>;
         newRows[i]=row;
         
        
     }    
    this.props.addButton(newRows);  */
};


getRows = () => {
  const newProps ={};
  newProps.filters=this.state.filters;
  newProps.rows=this.props.rows;
  return Data.Selectors.getRows(newProps);

};

handleFilterChange =(filter) => {

  const newFilters = Object.assign({}, this.state.filters);
  if (filter.filterTerm) {
    newFilters[filter.column.key] = filter;
  } else {
    delete newFilters[filter.column.key];
  }
  this.setState({filters:newFilters});
};

sortRows = (sortColumn, sortDirection) => {
  const comparer = (a, b) => {
    if (sortDirection === "ASC") {      return a[sortColumn] > b[sortColumn] ? 1 : -1;
    } else if (sortDirection === "DESC") {
      return a[sortColumn] < b[sortColumn] ? 1 : -1;
    }
  };
  this.props.sortRows(sortDirection === "NONE"?this.props.rows:[...this.props.rows].sort(comparer));
};

rowGetter = (rowIdx) =>{
 const tempRows =Object.assign([],this.getRows());
  return tempRows[rowIdx] ;

};
handleUpdateFromChild = (jan,feb,cID) =>{
  const row = Object.assign([],this.props.rows[cID]);
  row.jan=jan;
  row.feb=feb;
  this.props.updateFromChild(row);

};

 onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
   
     const id= this.props.rows[fromRow].id;
     this.props.updateRow(id,updated);
 };
RowRenderer = ({ renderBaseRow, ...props }) => {
    const color = props.idx % 2 ? "green" : "blue";
    return <div style={{ color }}>{renderBaseRow(props)}</div>;
  };
handleAddRow =() =>{
      
     let newData=[{ id:this.props.rows[this.props.rows.length-1].id+1,
       budgetNature: '',
       entity: '',
       account:'',
       section: '',
       type:'',
       apr: '',
       may: '',
       jun: '',
       jul: '',
       aug: '',
       sep: '',
       oct: '',
       nov: '',
       dev: '',
       jan: '',
       feb: '',
       mar: '',
       p13: ''
     }];
     //newData[0].updateButton= <FormDialog row={newData} onClick={this.handleUpdateFromChild}>Update</FormDialog>;
     this.props.addRow(newData);

}
render() {
    return (
      <div>{

          <ReactDataGrid
            columns={this.props.gridColumn}
            rows={this.props.rows}
            rowGetter={this.rowGetter.bind(this)}
            rowsCount={this.getRows().length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            //rowRenderer={this.RowRenderer}
            onGridSort={(sortColumn, sortDirection) =>
              this.sortRows(sortColumn, sortDirection)              
            }
            toolbar={<Toolbar enableFilter={true} />}
            onAddFilter={filter => this.handleFilterChange(filter)}
            minHeight={500}

        /> 
        
      } 
      <Button onClick={this.handleAddRow} color="primary">ADD ROW</Button>
      </div>
  
    );
  }
}

  const mapStateToProps = (state) =>{

  return{
    rows:state.gridReducer.rows,
    gridColumn:state.gridReducer.gridColumn,
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
      updateRows : (rows)=> dispatch ({type:'ROWS_UPDATE',value:{rows}}),
      updateFromChild : (row) => dispatch ({type : 'ROWS_UPDATE_CHILD',value:{row}}),
      updateRow :(id, updated) => dispatch ({type : 'ROWS_UPDATE',value:{id,updated}}),
      addRow : (row)=> dispatch ({type:'ROW_ADD',value:{row}}),
      sortRows : (rows)=>dispatch({ type : 'ROWS_SORT',value :{rows}}),
      filterRows : (rows)=>dispatch ({type : 'ROWS_FILTER',rows})

  }
};
export default connect(mapStateToProps,mapDispatchToProps)(SpreadSheet);  
//export default Example;