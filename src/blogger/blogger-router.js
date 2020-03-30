import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import HomeContainer from './containers/home/home-container'

class ProxyRouter extends Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={HomeContainer}/>
      </HashRouter>
    );
  }
}

export default ProxyRouter;
