import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import HomeContainer from './containers/home/home-container'

class ProxyRouter extends Component {
  render() {
    console.log('--==>> I am at ProxyRouter <<==--')
    return (
      <HashRouter>
        <Route exact path="/" component={HomeContainer}/>
      </HashRouter>
    );
  }
}

export default ProxyRouter;
