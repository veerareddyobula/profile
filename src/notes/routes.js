import React from 'react'
import { HashRouter, Route } from 'react-router-dom';

import './notes.styles.scss';
import DashboardContainer from './containers/dashboard'

export default () => {
  return (
    <div id="myDeveloperNotes" className="container-fluid">
      <HashRouter>
        <Route exact path="/products/notes/dashboard" component={DashboardContainer}/>
      </HashRouter>
    </div>
  );
};
