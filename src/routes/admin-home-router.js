import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import HeaderComponent      from './../components/header/header-component'
import ManagePostsContainer from './../containers/manage/manage-posts-container'
import AdminHomeContainer   from './../containers/admin-home/admin-home-container';
import AdminUsersContainer  from './../containers/admin-users/admin-users-container';
import ManageUsersContainer from './../containers/admin-users/manage-users-container'

class AdminHomeRouter extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <HashRouter>
                    <Route exact path="/profile/admin/allow/home"       component={AdminHomeContainer} />
                    <Route exact path="/profile/admin/allow/home/add"   component={ManagePostsContainer} />
                    <Route exact path="/profile/admin/allow/users"      component={AdminUsersContainer} />
                    <Route exact path="/profile/admin/allow/users/add"  component={ManageUsersContainer} />
                </HashRouter>
            </div>
        )
    }
}

export default AdminHomeRouter;