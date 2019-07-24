import React  from 'react';
import ReactDataGrid from "react-data-grid";

import { Toolbar,Data } from "react-data-grid-addons";
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';

const defaultColumnProperties = {
  resizable: true,
  width: 80,
  /* sortable: true,
  filterable: true */
};

const columns = [
  {
    key: "id",
    name: "ID",
    frozen: true,
    editable: true 
  },
  {
    key: "year",
    name: "Year",
    frozen: true,
    editable: true 
  },
  {
    key: "fund",
    name: "Fund",
    frozen: true,
    editable: true 
  },
  {
    key: "budget",
    name: "Budget",
    frozen: true,
    editable: true 
  },
  {
    key: "line",
    name: "# of Line",
    frozen: true,
    editable: true 
  },
  {
    key: "amount",
    name: "Total Amount",
    frozen: true,
    editable: true 
  }
  
].map(c => ({ ...c, ...defaultColumnProperties }));

class TitleGrid extends React.Component {
/* state={
    filters:{}
    
}; */

constructor(props){
    super(props);
    /*const newRows = Object.assign([], this.props.rows);
    
       for(let i=0;i<newRows.length;i++){
         const row = Object.assign({},newRows[i]);
         row.updateButton= <FormDialog row={row} onClick={this.handleUpdateFromChild}>Update</FormDialog>;
         newRows[i]=row;
         
        
     }    
    this.props.addButton(newRows); */
};

getRows = () => {

  return this.props.rows;

};

rowGetter = (rowIdx) =>{
 const tempRows =Object.assign([],this.getRows());
  return tempRows[rowIdx] ;

};

onGridRowsUpdated = ({ fromRow, toRow, updated }) => {
     const id= this.props.rows[fromRow].id;
     this.props.updateRow(id,updated);
 };
RowRenderer = ({ renderBaseRow, ...props }) => {
    const color = props.idx % 2 ? "green" : "blue";
    return <div style={{ color }}>{renderBaseRow(props)}</div>;
  };

render() {
    return (
      <div>{
          <ReactDataGrid
            columns={columns}
            rows={this.props.rows}
            rowGetter={this.rowGetter.bind(this)}
            rowsCount={this.getRows().length}
            onGridRowsUpdated={this.onGridRowsUpdated}
            enableCellSelect={true}
            rowRenderer={this.RowRenderer}
            minHeight={75}


        /> 
        
      } 
      </div>
  
    );
  }
}

  const mapStateToProps = (state) =>{

  return{
    rows:state.gridTitleReducer.titleRows
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
      
      updateTitleRow :(id, updated) => dispatch ({type : 'TITLEROWS_UPDATE',value:{id,updated}}),
      

  }
}
;
export default connect(mapStateToProps,mapDispatchToProps)(TitleGrid);  
//export default Example;