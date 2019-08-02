import React from 'react';
import TitleGrid from './TitleGrid';
import SpreadSheet from './SpreadSheet';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useStyles from './DashStyle';
import '../css/App.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import { budgetService } from '../_services';
import {reportColumns} from './ReportColumns';
import HandsonTable from './HandsonTable';
import { reportConstants } from '../_constants';
import { reportColHeader } from './ReportColHeader';

 function Recurrent(props) {
    const classes = useStyles();
    
    function handleYearChange(event) {
        props.updateYear(event.target.value);
    };
    function handleFundChange(event) {
        props.updateFund(event.target.value);
    }
    function handleScenarioChange(event) {
        props.updateScenario(event.target.value);
    }
    function handleGo(event) {
        console.log(props.reportKey);
        props.topInputUpdate(false);
        if (props.reportKey==='Clu05'){
            budgetService.getData05()
            .then(
                result=>{
                    console.log(111);
                    props.updateGridColumn(reportColumns.columnsClus05);
                    props.updateRows(result); 
                    props.updateColHeaders(reportColHeader.colHeadersCLUS05);
                    props.hotTableShowUpdate(true);
                },error => {
                    console.log(error);
                }
            );        
        }else if(props.reportKey==='Clu11'){
            budgetService.getData11()
            .then(
                result=>{
                    props.updateGridColumn(reportColumns.columnsClus11);
                    props.updateRows(result); 
                    props.updateColHeaders(reportColHeader.colHeadersCLUS11);
                    props.hotTableShowUpdate(true);
                },error => {
                    console.log(error);
                }
            );
        }
        
        
    }
    return (
            
            
            <div>
            <Title>{props.funType}<span>{ props.scenario ? '>' : null }{props.scenario}</span><span>{ props.level ? '>' : null }{props.level}</span> <span>{ props.reportName ? '>' : null }{props.reportName}</span></Title>
            { props.topInputShow ? 
                <div>
                    <TextField id="scenario" select label="Scenario" className={classes.textField} value={props.scenario} onChange={handleScenarioChange}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select scenario" margin="normal" variant="outlined" >
                            <MenuItem key="Recurrent" value="Recurrent">Recurrent</MenuItem>
                            <MenuItem key="Budget" value="Budget">Budget</MenuItem>
                    </TextField>
                    <TextField id="fund" select label="Fund" className={classes.textField} value={props.fund} onChange={handleFundChange} SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select fund" margin="normal" variant="outlined">
                            <MenuItem key="FUND01" value="FUND01"> FUND 01</MenuItem>
                            <MenuItem key="FUND02" value="FUND02">FUND 02</MenuItem>
                    </TextField>
                    <TextField
                        id="year"
                        select
                        label="Year"
                        className={classes.textField}
                        value={props.year}
                        onChange={handleYearChange}
                        SelectProps={{
                            MenuProps: {
                            className: classes.menu,
                            },
                        }}
                        helperText="Please select year"
                        margin="normal"
                        variant="outlined"
                        >
                            <MenuItem key="FY19" value="FY19">
                            FY19
                            </MenuItem>
                            <MenuItem key="FY20" value="FY20">
                            FY20
                            </MenuItem>
                    </TextField>
                    <Button variant="contained" className={classes.RecButton} color="primary" onClick={handleGo} size="large">Go</Button>
                {/*  <TextField
                        id="budget"
                        label="Budget"
                        
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputProps={{
                            readOnly: true,
                        }}
                        value={props.budget}
                    /> */}
                </div>
            
            : null }
            
                <div className="dataDiv"> { props.hotTableShow ? <HandsonTable /> : null }</div>
            </div>   
        
        );
    }  
    
    const mapStateToProps = (state) =>{

        return{
            year:state.gridTitleReducer.year,
            fund:state.gridTitleReducer.fund,
            reportKey:state.gridTitleReducer.reportKey,
            reportName:state.gridTitleReducer.reportName,
            scenario:state.gridTitleReducer.scenario,
            funType:state.gridTitleReducer.funType,
            level:state.gridTitleReducer.level,
            topInputShow:state.gridTitleReducer.topInputShow,
            gridColumn:state.gridReducer.gridColumn,
            rows:state.gridReducer.rows,
            colHeaders:state.gridReducer.colHeaders,
            hotTableShow:state.gridTitleReducer.hotTableShow,
        }
    };
    const mapDispatchToProps = dispatch => ({
        updateYear: (year) => dispatch ({type:reportConstants.YEAR_UPDATE,value:{year}}),
        updateFund: (fund) => dispatch ({type:reportConstants.FUND_UPDATE,value:{fund}}),
        updateScenario: (scenario) => dispatch ({type:reportConstants.SCENARIO_UPDATE,value:{scenario}}),
        updateGridColumn: (title) => dispatch ({type:reportConstants.GRIDCOLUMN_UPDATE,value:{title}}),
        updateRows : (rows)=> dispatch ({type:reportConstants.ROWS_UPDATE,value:{rows}}),
        topInputUpdate :(top)=> dispatch ({type:reportConstants.SHOW_TOPINPUT,value:{top}}),
        hotTableShowUpdate :(show)=> dispatch ({type:reportConstants.SHOW_HOT_TABLE,value:{show}}),
        updateColHeaders: (colHeaders)=>dispatch ({type:reportConstants.COLUMNHEADER_UPDATE,value:{colHeaders}}),
    });

    export default connect(mapStateToProps,mapDispatchToProps)(Recurrent);  

    

