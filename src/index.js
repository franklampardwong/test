import React  from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
//import reducer from './_reducers/grid.reducer';
import * as serviceWorker from './serviceWorker';

//login 
import { store } from './_helpers';
import { App } from './App/App';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();



//const store = createStore(reducer);




/* ReactDOM.render(<App />, document.getElementById('header')); */
/* ReactDOM.render(<Provider store = {store}><SpreadSheet /></Provider>, document.getElementById('App'));     */
   ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById('App'));    
 /* ReactDOM.render(<Provider store = {store}><Dashboard /></Provider>, document.getElementById('App'));  */



serviceWorker.unregister();
