import React, { Component } from 'react'
import './aboutme-component.css'

class AboutmeComponent extends Component {
    render() {
        return (
            <div className="parallax-container center valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12 white-text">
                            <h4 className="s-font-wish-heading">
                                <p className="s-text-color-white">
                                    <em>Hey, I'm</em>
                                </p>
                            </h4>
                            <p className="s-font-name-heading">Veera Reddy Obulareddy</p>
                            <p className="s-font-role-heading">I`m a full-stack web developer</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-4 s8">
                            <a href="assets/veera_Resume.pdf" target="_blank" className="btn amber darken-3 text-white">
                                <i className="material-icons left">file_download</i>Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="parallax">
                    <img alt="Hay, I`m Veera Reddy Obulareddy" src="assets/parallax/1PFHyYy-plain-background-wallpaper.jpg?dpr=1&auto=format&fit=crop&w=1500&h=927&q=80&cs=tinysrgb&crop=" />
                </div>
            </div>
        )
    }
}

export default AboutmeComponent