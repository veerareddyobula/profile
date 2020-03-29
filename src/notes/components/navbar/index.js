import React from "react";
import $ from "jquery";
import M from "materialize-css";

export default props => {
  const { profile } = props;
  console.log("--== I am NavBar Default ==--", profile);

  const signOutViaGoogle = React.useCallback((event) => {
    event.preventDefault();
    sessionStorage.removeItem("currentUserData");
    window.gapi.auth2.getAuthInstance().signOut();
    console.log('--== signOutViaGoogle ==--');
    props.history.push('/');
  });

  React.useEffect(() => {
    M.Sidenav.init($(".sidenav"), {});
    M.Dropdown.init($(".dropdown-trigger"), { constrainWidth: false });
  });

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper bg-success">
          <a href="#!" className="brand-logo mr-1">
            My Dev Notes
          </a>
          <a href="#/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <div>
                <a
                  className="dropdown-trigger"
                  href="#/"
                  data-target="dropdown1"
                >
                  <img
                    alt="profile"
                    src={
                      profile && profile.url
                        ? profile.url
                        : "assets/icons/account.png"
                    }
                    className="avatar"
                  />
                </a>
                <ul id="dropdown1" className="dropdown-content">
                  <li className="col-flex-two">
                    <div>
                      <i className="material-icons left">account_circle</i>
                    </div>
                    <div>{(profile && profile.fullName) || "--"}</div>
                  </li>
                  <li className="divider" tabIndex="-1"></li>
                  <li className="col-flex-two">
                    <div>
                      <i className="material-icons left">email</i>
                    </div>
                    <div>{(profile && profile.email) || "--"}</div>
                  </li>
                  <li className="divider" tabIndex="-1"></li>
                  <li className="d-flex justify-content-center">
                    <button
                      className="waves-effect waves-light btn"
                      onClick={(event) => signOutViaGoogle(event)}
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li className="col-flex-two">
          <div>
            <i className="material-icons left">account_circle</i>
          </div>
          <div>{(profile && profile.fullName) || "--"}</div>
        </li>
        <li className="divider" tabIndex="-1"></li>
        <li className="col-flex-two">
          <div>
            <i className="material-icons left">email</i>
          </div>
          <div>{(profile && profile.email) || "--"}</div>
        </li>
        <li className="divider" tabIndex="-1"></li>
        <li className="d-flex justify-content-center">
          <button
            className="waves-effect waves-light btn"
            onClick={() => signOutViaGoogle()}
          >
            <i className="material-icons left">exit_to_app</i> Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
};
