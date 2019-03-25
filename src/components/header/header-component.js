import React, { Component } from 'react';
import './header-component.css'
class HeaderComponent extends Component {
    render() {
        return (
            <nav className="blue darken-1 white-text">
                <div className="nav-wrapper">
                    <a href="#/" className="brand-logo"><h6>Veera Reddy.Obulareddy</h6></a>
                    <ul className="right hide-on-med-and-down">
                        <li className="hoverable active"><a href="#/">Home</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent;