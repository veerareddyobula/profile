import React, { Fragment } from 'react'

const LoginComponent = ({user, handleSignInHandler, handleOnChange}) => {
    return (
        <Fragment>
            <div className="card">
                <div className="card-header blue darken-1 white-text">
                    <span className="card-title">Veera Reddy.Obulareddy Profile : Login</span>
                </div>
                <div className="card-content white-text">
                    <div className="d-flex flex-column">
                        <div className="input-field col s6">
                            <input 
                                placeholder="Placeholder" 
                                id="email" 
                                type="email" 
                                className="validate" 
                                value={user.email}  
                                onChange={(event)=>handleOnChange('email', event)} />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input 
                                id="password" 
                                type="password" 
                                className="validate" 
                                value={user.password}  
                                onChange={(event)=>handleOnChange('password', event)} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                </div>
                <div className="card-action">
                    <div className="d-flex justify-content-between">
                        <a href="#/" className="btn blue-grey darken-2 white-text mr-2">
                            <i className="material-icons left">cancel</i>Cancel
                        </a>
                        <button onClick={handleSignInHandler} className="btn blue darken-1 white-text mr-2">
                            <i className="material-icons left">check</i>Sign-In
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
} 

export default LoginComponent