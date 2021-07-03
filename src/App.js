// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router';

import HomePage from './containers/homePage';
import LoginPage from './features/auth/loginPage'
import NotFound from './containers/notFound';
import RegistrationPage from './features/auth/registrationPage';
import DashboardRouter from './containers/dashboard/routes';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/dashboard" component={DashboardRouter} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegistrationPage} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={HomePage} />
        <Redirect to="/not-found" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
