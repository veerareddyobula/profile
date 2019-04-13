import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import DashboardContainer from './containers/dashboard-container'

class NotebooksRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Route exact path="/profile/admin/allow/notebooks/dashboard" component={DashboardContainer} />
            </HashRouter>
        )
    }
}

export default NotebooksRouter;