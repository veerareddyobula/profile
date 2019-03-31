import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import DashboardContainer from '../containers/dashboard-container.js'
import './../styles/notebook-styles.css'

class NoteBooksRouter extends Component {
  render() {
    console.log('--==>> I am at NoteBooksRouter <<==--')
    return (
      <HashRouter>
        <Route exact path="/profile/admin/allow/notebooks/dashboard"    component={DashboardContainer}/>
      </HashRouter>
    );
  }
}

export default NoteBooksRouter;
