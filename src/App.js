import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom';

import BloggerRouter    from 'blogger/blogger-router';
import NotesRouter      from 'notes/routes';
import 'App.scss'

class App extends Component {

  render() {

    return (
      <HashRouter>
        <Route exact path="/products/*" component={NotesRouter} />
        <Route exact path="/" component={props => (<BloggerRouter {...props} />) } />
      </HashRouter>
    );
  }
}

export default App;
