import React from "react";

class Dashboard extends React.Component {

  componentDidMount() {
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2.isSignedIn.get()) {
      let profile = auth2.currentUser.get().getBasicProfile();
      console.log('ID: ' + profile.getId());
      console.log('Full Name: ' + profile.getName());
      console.log('Given Name: ' + profile.getGivenName());
      console.log('Family Name: ' + profile.getFamilyName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail());
    }
  }

  render() {
    console.log("--=== Dashboard Component ===--");
    return (
      <React.Fragment>
        <div>This is body</div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
