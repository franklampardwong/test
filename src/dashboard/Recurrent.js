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
import {columns05} from './ReportColumns';


 function Recurrent(props) {
    const [spShow,setSpShow]= useState(false);
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
        if (props.reportKey==='Clu05'){
            budgetService.getData05()
            .then(
                result=>{
                    console.log(result);
                    console.log(columns05);
                    props.updateGridTitle(columns05);
                    props.addButton(result); 
                    setSpShow(true);
                },error => {
                    console.log(error);
                }
            );
        }
        
    }
    return (
            
            <Container maxWidth="lg" className={classes.container}>
            <Grid item xs={12}>
            <Title>{props.funType}</Title><Title><span>{props.level}</span> &nbsp;<span>{props.scenario}</span> &nbsp;<span>{props.reportName}</span></Title>
            <div>
                <TextField
                    id="scenario"
                    select
                    label="Scenario"
                    className={classes.textField}
                    value={props.scenario}
                    onChange={handleScenarioChange}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    helperText="Please select scenario"
                    margin="normal"
                    variant="outlined"
                    >
                        <MenuItem key="Recurrent" value="Recurrent">
                        Recurrent
                        </MenuItem>
                        <MenuItem key="Budget" value="Budget">
                        Budget
                        </MenuItem>
                </TextField>
                <TextField
                    id="fund"
                    select
                    label="Fund"
                    className={classes.textField}
                    value={props.fund}
                    onChange={handleFundChange}
                    SelectProps={{
                        MenuProps: {
                        className: classes.menu,
                        },
                    }}
                    helperText="Please select fund"
                    margin="normal"
                    variant="outlined"
                    >
                        <MenuItem key="FUND01" value="FUND01">
                        FUND 01
                        </MenuItem>
                        <MenuItem key="FUND02" value="FUND02">
                        FUND 02
                        </MenuItem>
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
                <div className="dataDiv"> { spShow ? <SpreadSheet /> : null }</div>
                
            </Grid>
            </Container>
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
            gritTitle:state.gridReducer.gridTitle,
            rows:state.gridReducer.rows
        }
    };
    const mapDispatchToProps = dispatch => ({
        updateYear: (year) => dispatch ({type:'YEAR_UPDATE',value:{year}}),
        updateFund: (fund) => dispatch ({type:'FUND_UPDATE',value:{fund}}),
        updateScenario: (scenario) => dispatch ({type:'SCENARIO_UPDATE',value:{scenario}}),
        updateGridTitle: (title) => dispatch ({type:'GRIDTITLE_UPDATE',value:{title}}),
        addButton : (rows)=> dispatch ({type:'ROWS_ADD_BUTTON',value:{rows}}),
    });

    export default connect(mapStateToProps,mapDispatchToProps)(Recurrent);  

    

