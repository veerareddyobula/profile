import React, { Component } from 'react'

import HomeContainer from './../containers/home/home-container'
class ProfileRouter extends Component {
    render() {
        console.log('--==>> I am at ProfileRouter <<==--')
        return (
            <HomeContainer />
        )
    }
}
export default ProfileRouter
