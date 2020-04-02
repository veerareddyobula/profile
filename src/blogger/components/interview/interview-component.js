import React, { Component } from "react";
import DeveloperNotesCard from "./../cards/developer-notes-card";
import MythRetro from "./../cards/myth-retro-card";
import "./interview-component.scss";

class InterviewComponent extends Component {
  render() {
    return (
      <div className="interviewSection">
        <div>
          <div className="interview-card">
            <div className="interview-card-content">
              <div>
                <img
                  alt="Thimble Logo"
                  src="assets/svg/thimble.svg"
                  width="100"
                  data-reactid=".0.2.0.0.0"
                  style={{ paddingTop: "20px" }}
                />
              </div>
                <div className="row">
                  <div className="col offset-s2 s8 ">
                <blockquote>
                  <p className="flow-text white-text light-1">"Everyday life is like programming, I guess. If you love
                                something, you can put beauty into it."</p>
                </blockquote>

                  </div>
                </div>
              <div className="row">
                <div className="col s12 m6 l4">
                  <DeveloperNotesCard {...this.props} />
                </div>
                <div className="col s12 m6 l4">
                  <MythRetro {...this.props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InterviewComponent;
