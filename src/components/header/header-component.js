import React, { Component } from 'react';
import './header-component.css'
class HeaderComponent extends Component {
    render() {
        return (
            <nav className="blue darken-1 white-text">
                <div className="nav-wrapper">
                    <a href="#/" className="brand-logo">Veera Reddy.Obulareddy</a>
                    <ul className="right hide-on-med-and-down">
                        <li className="hoverable active"><a href="#/">Home</a></li>
                        <li className="hoverable"><a href="#/">About</a></li>
                        <li className="hoverable"><a href="#/">Portfolio</a></li>
                        <li className="hoverable"><a href="#/">Contact</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default HeaderComponent;