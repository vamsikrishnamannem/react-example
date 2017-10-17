import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login.jsx';
import DashBoard from "./dashboard.jsx";
import { Router, Route, Redirect } from 'react-router'
ReactDOM.render((
  <Router>
    <Redirect from='/' to='/login'/>
    <Route path="/login" component={Login}/>
    <Route path="/dashboard" component={DashBoard}/>
  </Router>
), document.getElementById('root'));
