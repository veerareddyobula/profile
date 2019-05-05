import React, { Component } from "react";
import "./login-container.scss";

class LoginContainer extends Component {
  render() {
    return (
      <div id="loginContainer">
        <div className="card">
          <div className="card-header  bg-success text-light">
            <div className="card-title">Front-End Interview Preparation</div>
          </div>
          <div className="card-content">
            <div class="input-field col s6">
              <input
                placeholder="First Name"
                id="first_name"
                type="text"
                class="validate"
              />
              <label for="first_name">First Name</label>
            </div>
            <div class="input-field col s6">
              <input
                placeholder="Last Name"
                id="last_name"
                type="text"
                class="validate"
              />
              <label for="last_name">Last Name</label>
            </div>
            <div class="input-field col s6">
              <input
                placeholder="Email"
                id="email"
                type="email"
                class="validate"
              />
              <label for="email">Email</label>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <a href="#/" className="btn btn-default">
                Cancel
              </a>
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
