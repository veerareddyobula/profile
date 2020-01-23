import React, { Component } from "react";
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
                  style={{paddingTop: '20px'}}
                />
              </div>
              <div>
                <div className="interviewQuote">
                <h3>"To be a great champion, you must believe you are the best. If you're not, pretend you are." <br/>—Muhammad Ali</h3>
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
