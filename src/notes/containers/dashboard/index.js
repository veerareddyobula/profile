import React from "react";
import Navbar from './../../components/navbar';

export default (props) => {
  const [profile, seProfile] = React.useState();

  React.useEffect(() => {
    if (window.gapi && window.gapi.auth2) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (!auth2.isSignedIn.get()) {
        props.history.push("/");
      }else {
        seProfile(JSON.parse(sessionStorage.getItem('currentUserData')));
      }
    } else {
      props.history.push("/");
    }
  }, []);

  return (
    <React.Fragment>
      <Navbar profile={profile} {...props} />
      <div>This is body</div>
    </React.Fragment>
  );
}
