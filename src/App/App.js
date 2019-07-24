import React from 'react';
import { Router, Route,Switch,HashRouter  } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';
import  Dashboard from '../dashboard/Dashboard';


require('dotenv').config();
class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        const { alert } = this.props;

        return (
            <Router history={history}>
                 <Switch>
                        <PrivateRoute exact path="/" component={Dashboard} />
                        <PrivateRoute path="/main" component={Dashboard} />

                    
                    <div className="jumbotron">
                        <div className="container"> 
                            <div className="col-sm-8 col-sm-offset-2"> 
                                {alert.message &&
                                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                                }   
                                <div>           
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                  
                 </Switch>
            </Router>   
        );
    }
}

function mapStateToProps(state) {
    const { alert , authentication} = state;
    const {user} = authentication;
    return {
        alert,
        user
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 