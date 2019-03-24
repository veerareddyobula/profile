import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class LoginComponent extends Component {

    render() {
        return (
            <div class="card">
                <div className="card-header blue darken-1 white-text">
                    <span class="card-title">Veera Reddy.Obulareddy Profile : Login</span>
                </div>
                <div class="card-content white-text">
                    <div className="d-flex flex-column">
                        <div class="input-field col s6">
                            <input placeholder="Placeholder" id="email" type="email" class="validate" />
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field col s12">
                            <input id="password" type="password" class="validate" />
                            <label for="password">Password</label>
                        </div>
                    </div>
                </div>
                <div class="card-action">
                    <div className="d-flex justify-content-between">
                        <a href="#/" className="btn blue-grey darken-2 white-text mr-2">
                            <i className="material-icons left">cancel</i>Cancel
                        </a>
                        <a href="#/profile/admin/allow/home" className="btn blue darken-1 white-text mr-2">
                            <i className="material-icons left">check</i>Sign-In
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginComponent