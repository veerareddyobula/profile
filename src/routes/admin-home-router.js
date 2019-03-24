import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HeaderComponent      from './../components/header/header-component'
import ManagePostsContainer from './../containers/manage/manage-posts-container'
import AdminHomeContainer   from './../containers/admin-home/admin-home-container';

class AdminHomeRouter extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <BrowserRouter>
                    <Route exact path="/admin/allow/home"       component={AdminHomeContainer} />
                    <Route exact path="/admin/allow/home/add"   component={ManagePostsContainer} />
                </BrowserRouter>
            </div>
        )
    }
}

export default AdminHomeRouter;