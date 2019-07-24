
import faker from "faker";

 let rows = [];
 let gridTitle =[];
const initialState={
    rows :rows,
    gridTitle
}

export const gridReducer = (state =initialState, action)=>{
    const newState = {...state};
    
    switch (action.type) {
        
        case 'ROWS_ADD_BUTTON':
            return {
                ...state,
                rows:action.value.rows
            } 
        case 'ROWS_UPDATE':

            return{ ...state, rows: state.rows.map(r => (r.id === action.value.id) ? {...r,...action.value.updated} : r) }
           
        case 'ROWS_UPDATE_CHILD':
        {     

            return{ ...state, rows: state.rows.map(r => (r.id === action.value.row.id) ? action.value.row: r) }
        }
        case 'ROW_ADD':
        {     
            
            const newRows =  state.rows.concat(action.value.row);
            //return{ ...state, rows: rows.concat(action.value.row) }
            return{ ...state, rows: newRows }
        }
        case 'ROWS_SORT':
        {     
            return{ ...state,rows: action.value.rows }
        }
        case 'GRIDTITLE_UPDATE':
            console.log(state);
        {
            return {...state,gridTitle: action.value.title}
        }    
        default:{
        
          return state;
        }
    }
    
} ;