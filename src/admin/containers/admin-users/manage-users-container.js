import React, { Component, Fragment } from 'react'
import M from "materialize-css";
import { connect } from "react-redux"
import { addNewUser } from "../../actions"

class ManageUsersContainer extends Component {

    state = {
        user: {
            firstName: ''
        },
        error: {}
    }

    handleOnChange = (entity, event) => {
        const { user } = this.state
        user[entity] = event.target.value
        this.setState({ user })
    }

    handleSaveUser = (event) => {
        const { user } = this.state
        this.props.addNewUser(user)
    }

    componentWillReceiveProps(nextProps) {
        console.log('--== ManageUsersContainer --== ', nextProps)
        const {history} = this.props
        if(nextProps.usersCurd && nextProps.usersCurd.error){
            M.toast({html: nextProps.usersCurd.error.message, classes:'toastClass', display: 6000})
        }else {
            history.push('#/profile/admin/allow/users')
        }
    }

    render() {
        const {user} = this.state
        return (
            <Fragment>
                <div className="container mt-4">
                    <div className="card">
                        <div className="card-content">
                            <div className="row">
                                <div className="col m6 s12">
                                    <div className="input-field col s12">
                                        <input  id="firstName" 
                                                type="text" 
                                                className="validate" 
                                                value={user.firstName} 
                                                onChange={(event) => this.handleOnChange('firstName', event)} />
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input  id="lastName" 
                                                type="text" 
                                                className="validate" 
                                                value={user.lastName} 
                                                onChange={(event) => this.handleOnChange('lastName', event)} />
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input  id="mobileNum" 
                                                type="text" 
                                                className="validate" 
                                                value={user.mobileNum} 
                                                onChange={(event) => this.handleOnChange('mobileNum', event)} />
                                        <label htmlFor="mobileNum">Mobile Number</label>
                                    </div>
                                </div>
                                <div className="col m6 s12">
                                    <div className="input-field col s12">
                                        <input  id="userName" 
                                                type="text" 
                                                className="validate" 
                                                value={user.userName} 
                                                onChange={(event) => this.handleOnChange('userName', event)} />
                                        <label htmlFor="userName">User Name</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input  id="email" 
                                                type="text" 
                                                className="validate" 
                                                value={user.email} 
                                                onChange={(event) => this.handleOnChange('email', event)} />
                                        <label htmlFor="email">Email</label>
                                    </div>
                                    <div className="input-field col s12">
                                        <input  id="password" 
                                                type="password" 
                                                className="validate" 
                                                value={user.password} 
                                                onChange={(event) => this.handleOnChange('password', event)} />
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-between">
                                <button className="btn blue-grey darken-2 white-text mr-2 ">
                                    <i className="material-icons left">cancel</i>Cancel
                                </button>
                                <button className="btn blue darken-1 white-text mr-2" onClick={this.handleSaveUser}>
                                    <i className="material-icons left">save</i>Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = ({ usersCurd }) => {
    return {
        usersCurd
    }
}
export default connect(mapStateToProps, { addNewUser })(ManageUsersContainer)