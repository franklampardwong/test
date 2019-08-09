import { reportConstants } from '../_constants';
const initialState={
    year:'FY19',
    fund:'FUND01',
    reportName: "",
    reportKey:"",
    scenario: "Recurrent",
    funType: "Budget",
    level:"".concat,
    topInputShow:false,
    hotTableShow:false,
    entity:"HKEC",
    budgetType:"JunBudget",

}

export const gridTitleReducer = (state =initialState, action)=>{

    switch (action.type) {
       
        case reportConstants.YEAR_UPDATE:
            return{ ...state, year: action.value.year }
        case reportConstants.FUND_UPDATE:
            return{ ...state, fund: action.value.fund }
        case reportConstants.REPORTNAME_UPDATE:
            return{ ...state, reportName: action.value.reportName }   
        case reportConstants.REPORTKEY_UPDATE:
            return{ ...state, reportKey: action.value.reportKey }   
        case reportConstants.SCENARIO_UPDATE:
            return{ ...state, scenario: action.value.scenario }   
        case reportConstants.TYPE_UPDATE:
            return{ ...state, funType: action.value.funType }   
        case reportConstants.LEVEL_UPDATE:
            return{ ...state, level: action.value.level }   
        case reportConstants.SHOW_TOPINPUT:
            return{ ...state, topInputShow: action.value.top }  
        case reportConstants.SHOW_HOT_TABLE:
            return{ ...state, hotTableShow: action.value.show }              

        default:{
          return state;
        }
    }
    
} ;