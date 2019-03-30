import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

class FooterComponent extends Component {
    render() {
        return (
            <footer className="page-footer orange">
                <div className="footer-copyright">
                    <div className="d-flex justify-content-between flex-wrap" style={{width:'100%'}}>
                        <a href="#/profile/admin/login" className="btn blue darken-3 text-white ml-3">
                            <i className="material-icons left">verified_user</i> New Work Studio
                        </a>
                        <div className="mr-2">© 2019 Copyright New-Work-Studio@Veera Reddy.Obulareddy</div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent