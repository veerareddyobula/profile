import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import HeaderComponent      from './../components/header/header-component'
import ManagePostsContainer from './../containers/manage/manage-posts-container'
import AdminHomeContainer   from './../containers/admin-home/admin-home-container';

class AdminHomeRouter extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <HashRouter>
                    <Route exact path="/profile/admin/allow/home"       component={AdminHomeContainer} />
                    <Route exact path="/profile/admin/allow/home/add"   component={ManagePostsContainer} />
                </HashRouter>
            </div>
        )
    }
}

export default AdminHomeRouter;