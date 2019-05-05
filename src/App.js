import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import BloggerRouter    from './blogger/routes/blogger-router'
import ProfileRouter    from './admin/routes/admin-router'
import FrontEndRouter   from './front-end-preparation/routes/front-end-router'
import './App.scss'

class App extends Component {
  render() {
    console.log('--==>> I am at App <<==--')
    return (
      <HashRouter>
        <Route exact path="/profile/frontend/*" component={FrontEndRouter}/>
        <Route exact path="/profile/admin/*"    component={ProfileRouter}/>
        <Route exact path="/"                   component={BloggerRouter}/>
      </HashRouter>
    );
  }
}

export default App;
