
import faker from "faker";

let rows = createRowData(5);

function createFakeRow(index) {
    return {
      id: index,
      // avartar: faker.image.avatar(),
      county: faker.address.county(),
      email: faker.internet.email(),
      title: faker.name.prefix(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      street: faker.address.streetName(),
      zipCode: faker.address.zipCode(),
      date: faker.date.past().toLocaleDateString(),
      bs: faker.company.bs(),
      catchPhrase: faker.company.catchPhrase(),
      companyName: faker.company.companyName(),
      //words: faker.lorem.words(),
      sentence: faker.lorem.sentence()
    };
  }
//const rows2 ={...rows,updateButton: <FormDialog index={index}>Update</FormDialog>};


function createRowData(count) {
        return [...Array(count).keys()].map(i => createFakeRow(i));
}

const initialState={
    rows : rows
}

const reducer = (state = initialState, action)=>{
    const newState = {...state};
    
    switch (action.type) {
        case 'ROWS_ADD_BUTTON':
            return {
                ...state,
                rows:action.value.rows
            } 
        case 'ROWS_UPDATE':
            /* console.log(state.rows)
            let newRows = {...state.rows};
            newRows[action.value.id]={...newRows[action.value.id],...action.value.updated};
            console.log(newRows);
            return {
              ...state,
              rows:newRows
            } */
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
        default:{
          return newState;
        }
    }
    
} ;
export default reducer;