import React, { Component, Fragment } from 'react'
import M from "materialize-css";
import { connect } from "react-redux"
import 'bootstrap/dist/css/bootstrap.css'

import LoginComponent from './../../components/login/login-component'
import { validateUser } from "./../../actions"
import './login-container.css'

class LoginContainer extends Component {

    state={
        user: {
            email: undefined,
            password: undefined
        }
    }

    handleSignInHandler = (event) => {
        const {user} = this.state
        console.log('--=== handleSignInHandler --== ', user)
        if(user.email && user.password){
            console.log('--- Validate the user OAuth ---')
            this.props.validateUser(user)
        }
    }

    handleOnChange = (fieldName, event) => {
        const {user} = this.state
        user[fieldName] = event.target.value
        this.setState({user})
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.usersData && nextProps.usersData.status && nextProps.usersData.status === 200){
            console.log('--== componentWillReceiveProps ==> ', nextProps)
            this.props.history.push('/profile/admin/allow/home')
        }else if(nextProps.usersData && nextProps.usersData.error && nextProps.usersData.error.message) {
            M.toast({html: nextProps.usersData.error.message, classes:'toastClass', display: 18000})
        }
    }

    render() {
        const {user} = this.state
        return (
            <Fragment>
                <div className="login-container">
                    <LoginComponent 
                        user={user} 
                        handleSignInHandler={this.handleSignInHandler} 
                        handleOnChange={this.handleOnChange} />
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ usersData }) => {
    return {
        usersData
    }
}
export default connect(mapStateToProps, { validateUser })(LoginContainer)
