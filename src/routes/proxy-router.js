import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import ProfileRouter from './profile-router.js'
import AdminRouter from './admin-router'

class ProxyRouter extends Component {
  render() {
    console.log('--==>> I am at ProxyRouter <<==--')
    return (
      <HashRouter>
        <Route exact path="/profile/admin/*"    component={AdminRouter}/>
        <Route exact path="/profile"            component={ProfileRouter}/>
      </HashRouter>
    );
  }
}

export default ProxyRouter;
