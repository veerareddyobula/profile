import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import ProxyRouter   from './routes/proxy-router.js'
import ProfileRouter from './routes/profile-router.js'
import './App.css'

class App extends Component {
  render() {
    console.log('--==>> I am at App <<==--')
    return (
      <HashRouter>
        <Route exact path="/profile/*"  component={ProxyRouter}/>
        <Route exact path="/"           component={ProfileRouter}/>
      </HashRouter>
    );
  }
}

export default App;
