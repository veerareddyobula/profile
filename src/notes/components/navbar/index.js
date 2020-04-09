import React from "react";
import $ from "jquery";
import M from "materialize-css";

export default props => {

  React.useEffect(() => {
    M.Sidenav.init($(".sidenav"), {});
    M.Dropdown.init($(".dropdown-trigger"), { constrainWidth: false });
  });

  return (
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper red darken-3 interval-slide-text">
          <a href="#/" className="brand-logo ml-1">
            <div className="flow-text">
              <p>Veera`s</p>
            </div>
          </a>
          <a href="#/" data-target="mobile-demo" className="sidenav-trigger mr-1">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="#/"><i className="material-icons left">more</i> About Me</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        <li>
          <a href="#/"><i className="material-icons left">more</i> About Me</a>
        </li>
      </ul>
    </div>
  );
};
