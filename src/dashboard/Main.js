import React from 'react';
import Home from './Home';
import Recurrent from './Recurrent';
import { Switch, Route,HashRouter } from 'react-router-dom';
import useStyles from './DashStyle';

export default function Main() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
                <Switch>
                    <Route exact path='/' component={Home}/>    
                    <Route path='/main/recurrent' component={Recurrent}/> 
                    <Route path='/main' component={Home}/>
                </Switch>
                
                {/* <Route path='/schedule' component={Schedule}/> */}
        
        
        </main>
    );
}    

    



