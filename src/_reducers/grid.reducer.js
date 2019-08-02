import { reportConstants } from '../_constants';
let rows = [];
let gridColumn =[];
let colHeaders =[];
let updatedRows=[];
let deletedRows=[];
const initialState={
    rows :rows,
    gridColumn:gridColumn,
    colHeaders:colHeaders,
    updatedRows:updatedRows,
    deletedRows:deletedRows,
}

export const gridReducer = (state =initialState, action)=>{
    const newState = {...state};
    
    switch (action.type) {
        
        case reportConstants.ROWS_UPDATE:
            return {
                ...state,
                rows:action.value.rows
            } 
        case reportConstants.ROWS_UPDATE:

            return{ ...state, rows: state.rows.map(r => (r.id === action.value.id) ? {...r,...action.value.updated} : r) }
           
        case reportConstants.ROWS_UPDATE_CHILD:
        {     
            return{ ...state, rows: state.rows.map(r => (r.id === action.value.row.id) ? action.value.row: r) }
        }
        case reportConstants.ROW_ADD:
        {     
            
            const newRows =  state.rows.concat(action.value.row);
            return{ ...state, rows: newRows }
        }
        case reportConstants.ROWS_SORT:
        {     
            return{ ...state,rows: action.value.rows }
        }
        case reportConstants.GRIDCOLUMN_UPDATE:
        {
            return {...state,gridColumn: action.value.title}
        }    
        case reportConstants.COLUMNHEADER_UPDATE:
        {
            return {...state,colHeaders: action.value.colHeaders}
        }  
        case reportConstants.SET_UPDATED_ROWS: 
        {
            return {...state,updatedRows: action.value.updatedRows}
        }  
        default:{
        
          return state;
        }
    }
    
} ;