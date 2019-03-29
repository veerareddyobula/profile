import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class FooterComponent extends Component {
    render() {
        return (
            <footer className="page-footer orange">
                <div className="footer-copyright">
                    <div className="d-flex justify-content-between" style={{width:'100%'}}>
                        <div>© 2019 Copyright Veera Reddy.Obulareddy</div>
                        <a href="#/profile/admin/login" className="btn blue-grey darken-2 white-text mr-2">
                            <i className="material-icons left">verified_user</i> New Work Studio
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent