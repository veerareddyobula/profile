import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import BloggerRouter    from './blogger/routes/blogger-router'
import './App.scss'

class App extends Component {
  render() {
    console.log('--==>> I am at App <<==--')
    return (
      <HashRouter>
        <Route exact path="/"                   component={BloggerRouter}/>
      </HashRouter>
    );
  }
}

export default App;
