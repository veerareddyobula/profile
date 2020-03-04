import React, { Component, Fragment } from "react";
import $ from "jquery";
import M from "materialize-css";
import moment from "moment";

import GEDigitalProjects from "../projects/gedigital-projects-component";
import WiproLimitedProjects from "../projects/wiprolimited-projects-component";
import DaviztaProjects from "../projects/davizta-projects-component";
import TripodProjects from "../projects/tripod-projects-component";
import "./career-summary-component.scss";

class CareerSummaryComponent extends Component {
  state = {
    experienceDetails: [
      {
        startDate: "2019-09-09",
        endDate: new Date(),
        companyName: "EPAM Systems India PVT Limited",
        subTitle: "Bengaluru (Karnataka, India)",
        siteUrl: "https://www.epam.com/"
      },
      {
        startDate: "2016-09-30",
        endDate: "2019-08-01",
        companyName: "GE-Degital",
        subTitle: "Bengaluru (Karnataka, India)",
        siteUrl: "https://www.ge.com/digital/"
      },
      {
        startDate: "2015-05-30", 
        endDate: "2016-08-01",
        companyName: "Wipro Limited",
        subTitle: "Bengaluru (Karnataka, India)",
        siteUrl: "https://www.epam.com/"
      },
      {
        startDate: "2013-05-30",
        endDate: "2015-01-01",
        companyName: "daVIZta India Pvt. Ltd",
        subTitle: "Pune (Maharashtra, India)",
        siteUrl: "https://davizta.com/"
      },
      {
        startDate: "2008-09-30",
        endDate: "2012-12-01",
        companyName: "Tripod Software Solutions PVT Ltd",
        subTitle: "Hyderabad (Telangana, India)",
        siteUrl: "http://www.tripodtech.net/"
      }
    ]
  };

  componentDidMount() {
    const tooltippedContainer = $(".tooltipped");
    M.Tooltip.init(tooltippedContainer, { delay: 50 });
    const modalContainer = $(".modal");
    M.Modal.init(modalContainer);
  }

  getTotalExperience = (experienceDetails) => {
      let totalNumberOfMonths = 0;
      experienceDetails.forEach((item) => {
        totalNumberOfMonths = totalNumberOfMonths + moment
        .duration(
          moment(item.endDate, "YYYY-MM-DD").diff(moment(item.startDate, "YYYY-MM-DD"))
        )
        .asMonths();
      })
      return Math.round(totalNumberOfMonths/12 * 10)/10;
  }

  getNumOfYearsOfExp = (startDate, endDate) =>
    moment
      .duration(
        moment(endDate, "YYYY-MM-DD").diff(moment(startDate, "YYYY-MM-DD"))
      )
      .asYears()
      .toFixed(1);

  render() {
    return (
      <Fragment>
        <div className="d--grid icon-block">
          <div className="icon--row">
            <h2 className="center light-blue-text">
              <i className="material-icons">highlight</i>
            </h2>
          </div>
          <h5 className="center slash--heading">
            Here`s what I`ve done so far
          </h5>
          <div className="profile--row--col">
            <div className="circle--badge">
              <img
                src="assets/veera_passport_pic.jpeg"
                alt="Veera"
                className="circle responsive-img"
              />
            </div>
            <div className="profile--col--name">
              <div style={{gridTemplateRows: '4em !important'}}>O.Veera Bhargava Reddy</div>
              <div style={{ display: "flex" }}>
                <span>
                  <i className="material-icons">email</i>
                </span>
                <span>obulareddyveera@gmail.com</span>
              </div>
              <div className="studies-in-details">
                <div>
                  <div>BTech (Computers Science & Engineering)</div>
                  <div>from S.V.University, Tirupathi, Andhra Pradesh, India</div>
                </div>
              </div>
              <div className="linked-in-btn">
                <p>
                  lets get in touch{" "}
                  <a href="https://www.linkedin.com/in/veera-reddy-obulareddy-070075122/">
                    LinkedIn
                  </a>
                  , messages work best
                </p>
              </div>
            </div>
          </div>
          <div className="collection experience--row--col">
            {
                this.state.experienceDetails.map((item, index) => {
                    return (
                        <div className="collection-item entity" key={new Date().getMilliseconds()+index}>
                            <div>
                                <a
                                href={item.siteUrl}
                                rel="noopener noreferrer"
                                target="_blank"
                                >{item.companyName}</a>
                                <div className="sub-label">{item.subTitle}</div>
                            </div>
                            <div>
                                <a
                                className="tooltipped modal-trigger"
                                href="#tripodProjects"
                                data-position="bottom"
                                data-delay="50"
                                data-tooltip="projects"
                                >
                                    <i className="material-icons">web</i>
                                </a>
                                <span
                                className="new badge link-color"
                                data-badge-caption="years"
                                >
                                {this.getNumOfYearsOfExp(item.startDate, item.endDate)}
                                </span>
                            </div>
                        </div>
                    )
                })
            }
            <div className="collection-item entity">
              <div></div>
              <div>
                <a href="#/" className="tooltipped" data-tooltip="Total Experience">
                    <i className="material-icons">add_shopping_cart</i>
                </a>
                <span className="new badge red" data-badge-caption="years">
                  {this.getTotalExperience(this.state.experienceDetails)}
                </span>
              </div>
            </div>
            {/* <div className="collection-item entity">
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
                        </div> */}
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
    );
  }
}

export default CareerSummaryComponent;
