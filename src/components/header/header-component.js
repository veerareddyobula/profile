import React, { Component } from 'react';
import './header-component.css'
class HeaderComponent extends Component {
    render() {
        return (
            <nav className="nav-bg-color darken-1">
                <div className="nav-wrapper">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <a href="#/">New Work Studio</a>
                        </div>
                        <div className="owner-name-display hide-on-med-and-down">Veera Reddy Obulareddy</div>
                        <ul className="right hide-on-med-and-down">
                            <li className="hoverable active"><a href="#/">Home</a></li>
                            <li className="hoverable"><a href="#/profile/admin/allow/notebooks/dashboard">NoteBooks</a></li>
                            <li className="hoverable"><a href="#/profile/admin/allow/users">Users</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent;