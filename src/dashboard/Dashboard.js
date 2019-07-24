import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';


import useStyles from './DashStyle';
import Main from './Main';
import crossImage from '../img/icons8-delete-16.png';
import rightImage from '../img/icons8-chevron-right-26.png';
import {forecastGovFileList} from './menu/FileList.js';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import TreeMenu from 'react-simple-tree-menu';
import {ForecastTreeData} from './menu/ForecastTreeMenu';
//import { mainListItems, secondaryListItems } from './listItems';

import { connect } from 'react-redux';
import UserProDialog from './UserProDialog';
import { userActions } from '../_actions';


   function Dashboard(props) { 
    
    const classes = useStyles();
  
    const [state, setState] = React.useState({
      open :true,
      secondOpen:false,

    });
    const handleDrawerOpen = () => {
      setState({...state,open:true,secondOpen:true})
    };
    const handleDrawerClose = () => {
      setState({...state,open:false,secondOpen:false})
    };
    const handleSecondClose = () => {

      setState({...state,secondOpen:false})
    };
    const handleSecondOpen = () => {

      setState({...state,secondOpen:true})
    };
    const handleUpdateForm = (form)=> {
      props.updateForm(form);
    }
    const handleUpdateTypeFor= ()=> {
      props.updateFunType('Forecast');
      setState({...state,secondOpen:true})
    }
    const handleUpdateTypeBud= ()=> {
      props.updateFunType('Budget');
    }

    const handleTreeOnClick= (event)=> {
      
      if (event.level==2){
        const temp =event.key.split('/');
        props.updateScenario(temp[0]);
        props.updateLevel(temp[1]);
        props.updateReportKey(temp[2]);
        props.updateReportName(event.label);
        setState({...state,open:false,secondOpen:false})
      }
      
    }
    
  
    return (
      
        

      
      <div className={classes.root}>
      
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, state.open && classes.appBarShift)}>
        
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="Open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, state.open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Budget Planning System
            </Typography>


            {/* <IconButton color="inherit"> */}
              {/* <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge> */}
            
            {/* </IconButton> */}
            <UserProDialog></UserProDialog>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !state.open && classes.drawerPaperClose),
          }}          open={state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          {/* <List>{mainListItems}</List> */}
          <div>
            <Link to="/main" onClick= {handleUpdateTypeBud} style={{ textDecoration: 'none',color:	"grey"}}>
              <ListItem button>
                <ListItemIcon button >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Budget" />
              </ListItem>
            </Link> 
            <Link to="/main/recurrent"  onClick= {handleUpdateTypeFor}  style={{ textDecoration: 'none',color:	"grey" }}>
              <ListItem button>
                <ListItemIcon button >
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText  primary="Forecast" />
              </ListItem>
            </Link>
            <Link to="/main/recurrent" style={{ textDecoration: 'none',color:	"grey" }}>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Fund01" />
            </ListItem>
            </Link>
            <Link to="/main/recurrent" style={{ textDecoration: 'none',color:	"grey" }}>
            <ListItem button>
              <ListItemIcon>
                <BarChartIcon />
              </ListItemIcon>
              <ListItemText primary="PE" />
            </ListItem>
            </Link>
            <Link to="/main/recurrent" style={{ textDecoration: 'none',color:	"grey" }}>
            <ListItem button>
              <ListItemIcon>
                <LayersIcon />
              </ListItemIcon>
              <ListItemText primary="WIF" />
            </ListItem> 
            </Link>
          </div>          
          
          <Divider />
         {/*  secondaryListItems          <List>{secondaryListItems}</List> */}
        </Drawer>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper2, !state.secondOpen && classes.secondDrawerPaperClose),
          }}
          open={state.secondOpen}
        >

          
        <div className={classes.toolbarIcon} >
           
        </div>
          <div className={classes.toolbarIcon}  style={{"height": "5px"}}>
            {
              state.secondOpen&& 
              <img src={crossImage} alt="" onClick={handleSecondClose} />
            }
            {
              !state.secondOpen&& 
              <img src={rightImage} alt="" onClick={handleSecondOpen} />
            }
          </div>
            <Divider />
            <TreeMenu data={ForecastTreeData} style={{ color:	"grey" }} onClickItem={handleTreeOnClick} />
                
                
              
        </Drawer>
        {/* <main className={classes.content}>
        <div className={classes.appBarSpacer} />
          
          
          
        </main> */}
        <Main/>
        
      </div>
    );
  }

  const mapStateToProps = state =>({
      authentication:state.authentication,
      year:state.gridTitleReducer.year,
      fund:state.gridTitleReducer.fund,
      reportKey:state.gridTitleReducer.reportKey,
      reportName:state.gridTitleReducer.reportName,
      funType:state.gridTitleReducer.funType,
      level:state.gridTitleReducer.level,
      scenario:state.gridTitleReducer.scenario

  });
  const mapDispatchToProps = dispatch => ({
    updateReportName: (reportName) => dispatch ({type:'REPORTNAME_UPDATE',value:{reportName}}),
    updateReportKey: (reportKey) => dispatch ({type:'REPORTKEY_UPDATE',value:{reportKey}}),
    updateFunType: (funType) => dispatch ({type:'TYPE_UPDATE',value:{funType}}),
    updateScenario: (scenario) => dispatch ({type:'SCENARIO_UPDATE',value:{scenario}}),
    updateLevel: (level) => dispatch ({type:'LEVEL_UPDATE',value:{level}}),
  });

  export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);  