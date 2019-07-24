
const initialState={
    year:'FY19',
    fund:'FUND01',
    reportName: "",
    reportKey:"",
    scenario: "Recurrent",
    funType: "Budget",
    level:"".concat,
}

export const gridTitleReducer = (state =initialState, action)=>{

    switch (action.type) {
       
        case 'YEAR_UPDATE':
            return{ ...state, year: action.value.year }
           
        case 'FUND_UPDATE':

            return{ ...state, fund: action.value.fund }
        case 'REPORTNAME_UPDATE':
            return{ ...state, reportName: action.value.reportName }   
        case 'REPORTKEY_UPDATE':
            return{ ...state, reportKey: action.value.reportKey }   
        case 'SCENARIO_UPDATE':
            return{ ...state, scenario: action.value.scenario }   
        case 'TYPE_UPDATE':
            return{ ...state, funType: action.value.funType }   
        case 'LEVEL_UPDATE':
            return{ ...state, level: action.value.level }   
        default:{
          return state;
        }
    }
    
} ;