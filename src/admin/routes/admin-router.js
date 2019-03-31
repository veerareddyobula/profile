import React, { Component, Fragment } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import LoginContainer    from './../containers/login/login-container'
import AdminHomeRouter   from './admin-home-router'

class AminRouter extends Component {

    componentWillMount(){
        const storeDetails = JSON.parse(localStorage.getItem('user'))
        const {history} = this.props
        const {location} = history;
        if(storeDetails && storeDetails.user && storeDetails.user.uid && location.pathname==='/profile/admin/login'){
            this.props.history.push('/profile/admin/allow/home')
            console.log('Allow Current Nav --== ', this.props.history)
        }else if(!storeDetails) {
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