import React from 'react';
import Home from './Home';
import Recurrent from './Recurrent';
import { Switch, Route } from 'react-router-dom';
import useStyles from './DashStyle';

export default function Main() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/recurrent' component={Recurrent}/>
                {/* <Route path='/schedule' component={Schedule}/> */}
            </Switch>
        
        
        </main>
    );
}    

    



