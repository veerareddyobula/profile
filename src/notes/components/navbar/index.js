import React from "react";
import $ from "jquery";
import M from "materialize-css";
import { useDispatch, useSelector } from "react-redux";

import {
  googleAuthInstanceSignIn,
  googleAuthInstanceSignOut
} from "store/actions";

export default () => {
  const dispatch = useDispatch();
  const { profileStore } = useSelector(state => {
    return {
      profileStore: state.ProfileStore
    };
  });
  const { isSignedIn, imageUrl, givenName } = profileStore;

  React.useEffect(() => {
    M.Sidenav.init($(".sidenav"), {});
    M.Dropdown.init($(".dropdown-trigger"), { constrainWidth: false });
  });

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper red darken-3 interval-slide-text">
          <a href="#/" className="brand-logo ml-1">
            <div className="flow-text">Veera`s ...Techi Records</div>
          </a>
          <a
            href="#/"
            data-target="mobile-demo"
            className="sidenav-trigger mr-1"
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="right hide-on-med-and-down mr-1">
            <div
              className="dropdown-trigger waves-teal white-text"
              href="#/"
              data-target="dropdown1"
            >
              {isSignedIn ? (
                <div className="chip">
                  <img
                    src={imageUrl}
                    alt={givenName}
                    className="circle responsive-img"
                  />
                  {givenName}
                </div>
              ) : (
                <i className="material-icons">airplay</i>
              )}
            </div>
            <ul id="dropdown1" className="dropdown-content">
              {isSignedIn && (
                <React.Fragment>
                  <li>
                    <a
                      href="#/products/notes/admin/home"
                      className="red white-text"
                    >
                      {" "}
                      <i className="material-icons left">folder_open</i>{" "}
                      <span>Admin</span>
                    </a>
                  </li>
                  <li className="divider" tabIndex="-1"></li>
                </React.Fragment>
              )}
              <li>
                <a href="#/" className="red white-text">
                  <i className="material-icons left">more</i> About Me
                </a>
              </li>
              <li className="divider" tabIndex="-1"></li>
              <li>
                {isSignedIn ? (
                  <button
                    className="red white-text waves-effect waves-teal btn-flat"
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => dispatch(googleAuthInstanceSignOut())}
                  >
                    <i className="material-icons left">exit_to_app</i>{" "}
                    <span>Sign-Out</span>
                  </button>
                ) : (
                  <button
                    className="red white-text waves-effect waves-teal btn-flat"
                    style={{ width: "100%", height: "100%" }}
                    onClick={() => dispatch(googleAuthInstanceSignIn())}
                  >
                    <i className="material-icons left">directions_bike</i> Admin
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          {isSignedIn && (
            <a href="#/products/notes/admin/home" className="red white-text">
              {" "}
              <i className="material-icons left">folder_open</i>{" "}
              <span>Admin</span>
            </a>
          )}
        </li>
        <li className="divider" tabIndex="-1"></li>
        <li>
          <a href="#/">
            <i className="material-icons left">more</i> About Me
          </a>
        </li>
        <li className="divider" tabIndex="-1"></li>
        <li>
          <a href="#/">
            <i className="material-icons left">directions_bike</i> Admin
          </a>
        </li>
      </ul>
    </div>
  );
};
