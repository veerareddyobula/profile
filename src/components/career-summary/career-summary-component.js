import React, { Component, Fragment } from 'react'
import $ from "jquery";
import M from "materialize-css";
import moment from 'moment'

import GEDigitalProjects    from '../projects/gedigital-projects-component'
import WiproLimitedProjects from '../projects/wiprolimited-projects-component'
import DaviztaProjects      from '../projects/davizta-projects-component'
import TripodProjects       from '../projects/tripod-projects-component'
import './career-summary-component.scss'

class CareerSummaryComponent extends Component {

    componentDidMount() {
        const tooltippedContainer = $('.tooltipped')
        M.Tooltip.init(tooltippedContainer, { delay: 50 });
        const modalContainer = $('.modal')
        M.Modal.init(modalContainer)
    }

    getNumOfYearsOfExp = (startDate, endDate) => moment.duration(moment(endDate, 'YYYY-MM-DD').diff(moment(startDate, 'YYYY-MM-DD'))).asYears().toFixed(1);

    render() {
        return (
            <Fragment>
                <div className="d--grid icon-block">
                    <div className="icon--row">
                        <h2 className="center light-blue-text">
                            <i className="material-icons">highlight</i>
                        </h2>
                    </div>
                    <h5 className="center slash--heading">Here`s what I`ve done so far</h5>
                    <div className="profile--row--col">
                        <div className="circle--badge">
                            <img src="assets/veera_passport_pic.jpg" alt="Veera" className="circle responsive-img" />
                        </div>
                        <div className="profile--col--name">O.Veera Bhargava Reddy</div>
                        <div style={{ display: 'flex' }}>
                            <span><i className="material-icons">email</i></span>
                            <span>veerareddy.obula@gmail.com</span>
                        </div>
                        <div className="linked-in-btn">BTech (Computers Science & Engineering)</div>
                        <div className="linked-in-btn">
                            <p>lets get in touch <a href="https://www.linkedin.com/in/veera-reddy-obulareddy-070075122/">LinkedIn</a>, messages work best</p>
                        </div>
                    </div>
                    <div className="collection experience--row--col">
                        <div className="collection-item entity">
                            <div className="d--flex--column">
                                <a href="https://www.ge.com/digital/" rel="noopener noreferrer" target="_blank">GE-Degital</a>
                                <div className="sub-label">Bengaluru (Karnataka, India)</div>
                            </div>
                            <div>
                                <a
                                    className="tooltipped modal-trigger"
                                    href="#geDigitalProjects"
                                    data-position="bottom"
                                    data-delay="50"
                                    data-tooltip="projects">
                                    <i className="material-icons">web</i>
                                </a>
                                <span className="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2016-09-01', new Date())}</span>
                            </div>
                        </div>
                        <div className="collection-item entity">
                            <div>
                                <a href="https://www.wipro.com/en-IN/" rel="noopener noreferrer" target="_blank">Wipro Limited</a>
                                <div className="sub-label">Bengaluru (Karnataka, India)</div>
                            </div>
                            <div>
                                <a
                                    className="tooltipped modal-trigger"
                                    href="#wiproLimitedProjects"
                                    data-position="bottom"
                                    data-delay="50"
                                    data-tooltip="projects">
                                    <i className="material-icons">web</i>
                                </a>
                                <span className="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2015-05-01', '2016-08-30')}</span>
                            </div>
                        </div>
                        <div className="collection-item entity">
                            <div>
                                <a href="https://davizta.com/" rel="noopener noreferrer" target="_blank">daVIZta India Pvt. Ltd</a>
                                <div className="sub-label">Pune (Maharashtra, India)</div>
                            </div>
                            <div>
                                <a
                                    className="tooltipped modal-trigger"
                                    href="#daviztaProjects"
                                    data-position="bottom"
                                    data-delay="50"
                                    data-tooltip="projects">
                                    <i className="material-icons">web</i>
                                </a>
                                <span className="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2013-05-01', '2015-01-30')}</span>
                            </div>
                        </div>
                        <div className="collection-item entity">
                            <div>
                                <a href="https://www.tripodtech.net/" rel="noopener noreferrer" target="_blank">Tripod Software Solutions PVT Ltd</a>
                                <div className="sub-label">Hyderabad (Telangana, India)</div>
                            </div>
                            <div>
                                <a
                                    className="tooltipped modal-trigger"
                                    href="#tripodProjects"
                                    data-position="bottom"
                                    data-delay="50"
                                    data-tooltip="projects">
                                    <i className="material-icons">web</i>
                                </a>
                                <span className="new badge link-color" data-badge-caption="years">{this.getNumOfYearsOfExp('2008-09-01', '2012-12-30')}</span>
                            </div>
                        </div>
                    </div>
                    <div className="technical--skills--row--col">
                        <span className="chip blue">HTML5</span>
                        <span className="chip red lighten-3">CSS3</span>
                        <span className="chip red lighten-3">Bootstrap</span>
                        <span className="chip orange">D3</span>
                        <span className="chip orange">Highcharts</span>
                        <span className="chip teal">Javascript</span>
                        <span className="chip">Java</span>
                        <span className="chip">GWT</span>
                        <span className="chip cyan accent-2">node.js</span>
                        <span className="chip cyan accent-2">express.js</span>
                        <span className="chip cyan accent-2">graphql</span>
                        <span className="chip lime accent-2">React.js</span>
                        <span className="chip lime accent-2">Apollo Client</span>
                        <span className="chip lime accent-2">Redux</span>
                        <span className="chip lime accent-2">Redux-Saga</span>
                        <span className="chip lime accent-2">Formik</span>
                        <span className="chip lime accent-2">YUP Validation</span>
                        <span className="chip green accent-2">AngularJs 1.x</span>
                        <span className="chip purple accent-3">Electron</span>
                        <span className="chip amber">Gulp</span>
                        <span className="chip amber">Grunt</span>
                        <span className="chip amber">Webpack</span>
                        <span className="chip light-green accent-3">Firebase</span>
                        <span className="chip light-green accent-3">MySql</span>
                        <span className="chip light-green accent-3">PostgresSQL</span>
                    </div>
                </div>
                <div id="geDigitalProjects" className="modal bottom-sheet">
                    <GEDigitalProjects />
                </div>
                <div id="wiproLimitedProjects" className="modal bottom-sheet">
                    <WiproLimitedProjects />
                </div>
                <div id="daviztaProjects" className="modal bottom-sheet">
                    <DaviztaProjects />
                </div>
                <div id="tripodProjects" className="modal bottom-sheet">
                    <TripodProjects />
                </div>
            </Fragment>
        )
    }
}

export default CareerSummaryComponent;