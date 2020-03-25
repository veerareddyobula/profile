import React, { Component } from 'react'
import $ from "jquery";
import M from "materialize-css";
import Pdf from '../../static/Veera_Resume.pdf';
import Doc from '../../static/Veera_Resume.doc';
import './aboutme-component.scss'

class AboutmeComponent extends Component {

    componentDidMount() {
        M.Dropdown.init($('.dropdown-trigger'), {});
    }

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
                            <p className="s-font-role-heading">I`m a full-stack JavaScript developer</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col offset-3 s9 d-flex justify-content-center">
                            <a href="https://github.com/veerareddyobula" target="_blank" rel="noopener noreferrer" className="btn blue darken-3 text-white mr-2">
                                <i className="material-icons left">code</i>Github
                            </a>
                            <div>
                                <a className='dropdown-trigger btn  amber darken-3 text-white mr-2' href='#/' data-target='dropdown1'>
                                    <i className="material-icons left">file_download</i> Resume
                                </a>
                                <ul id='dropdown1' className='dropdown-content'>
                                    <li>
                                        <a href={Pdf} target="_blank" rel="noopener noreferrer">
                                            <i className="material-icons left">picture_as_pdf</i> PDF
                                        </a>
                                    </li>
                                    <li>
                                        <a href={Doc} target="_blank" rel="noopener noreferrer">
                                            <i className="material-icons left">insert_drive_file</i> Doc
                                        </a>
                                    </li>
                                </ul>
                            </div>
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