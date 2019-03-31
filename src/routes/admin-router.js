import React, { Component, Fragment } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import LoginContainer    from './../containers/login/login-container'
import AdminHomeRouter   from './admin-home-router'

class AminRouter extends Component {

    componentWillMount(){
        const storeDetails = JSON.parse(localStorage.getItem('user'))
        if(storeDetails && storeDetails.user && storeDetails.user.uid){
            this.props.history.push('/profile/admin/allow/home')
        }else {
            this.props.history.push('/profile/admin/login')
        }
    }

    render() {
        console.log('--==>> I am at AminRouter <<==--')
        return (
            <Fragment>
                <HashRouter>
                    <Route exact path="/profile/admin/login"    component={LoginContainer} />
                    <Route exact path="/profile/admin/allow/*"  component={AdminHomeRouter} />
                </HashRouter>
            </Fragment>
        )
    }
}

export default AminRouter