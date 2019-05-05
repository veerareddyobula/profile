import React, { Component } from "react";
import { connect } from "react-redux";
import { onFrontEndPreparationLogin } from "./../../actions/login-container-actions";
import "./login-container.scss";

class LoginContainer extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps --== ", props, state);
    if(props.frontEndLoginData && props.frontEndLoginData.status === 200){
        props.history.push('dashboard')
    }
    return {};
  }

  state = {
    user: {
      firstName: undefined,
      lastName: undefined,
      email: undefined
    }
  };

  handleOnChange = (name, event) => {
    const { user } = this.state;
    user[name] = event.target.value;
    this.setState({ user });
  };

  handleLogin = () => {
    const { user } = this.state;
    this.props.onFrontEndPreparationLogin(user);
  };

  render() {
    const { user } = this.state;
    return (
      <div id="loginContainer">
        <div className="card">
          <div className="card-header  bg-success text-light">
            <div className="card-title">Front-End Interview Preparation</div>
          </div>
          <div className="card-content">
            <div className="input-field col s6">
              <input
                placeholder="First Name"
                id="first_name"
                type="text"
                className="validate"
                value={user.firstName}
                onChange={event => this.handleOnChange("firstName", event)}
              />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Last Name"
                id="last_name"
                type="text"
                className="validate"
                value={user.lastName}
                onChange={event => this.handleOnChange("lastName", event)}
              />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="input-field col s6">
              <input
                placeholder="Email"
                id="email"
                type="email"
                className="validate"
                value={user.email}
                onChange={event => this.handleOnChange("email", event)}
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="card-footer">
            <div className="d-flex justify-content-between">
              <a href="#/" className="btn btn-default">
                Cancel
              </a>
              <button className="btn btn-success" onClick={this.handleLogin}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ frontEndLoginData }) => {
  return {
    frontEndLoginData
  };
};

export default connect(
  mapStateToProps,
  { onFrontEndPreparationLogin }
)(LoginContainer);
