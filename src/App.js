import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import ProxyRouter   from './routes/proxy-router.js'
import ProfileRouter from './routes/profile-router.js'
import AdminRouter from './routes/admin-router'
import './App.css'

class App extends Component {
  render() {
    console.log('--==>> I am at App <<==--')
    return (
      <BrowserRouter>
        <Route exact path="/profile/*"  component={ProxyRouter}/>
        <Route exact path="/admin/*"    component={AdminRouter}/>
        <Route exact path="/profile"    component={ProfileRouter}/>
        <Route exact path="/"           component={ProfileRouter}/>
      </BrowserRouter>
    );
  }
}

export default App;
