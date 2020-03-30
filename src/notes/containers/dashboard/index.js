import React from "react";
import {connect} from 'react-redux';

import {initCurrentUserSession} from './../../../store/actions/user-actions';
import Navbar from './../../components/navbar';

const Dashboard = (props) => {
  const [profile, seProfile] = React.useState();
  console.log('--== Dashboard ', props);

  React.useEffect(() => {
    if (window.gapi && window.gapi.auth2) {
      const auth2 = window.gapi.auth2.getAuthInstance();
      if (!auth2.isSignedIn.get()) {
        props.history.push("/");
      }else {
        const currentUserData = JSON.parse(sessionStorage.getItem('currentUserData'));
        seProfile(currentUserData);
        console.log('--== 1) initCurrentUserSession ', currentUserData);
        props.initCurrentUserSession(currentUserData);
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.CurrentUser
  }
}

const mapDispatchToProps = {
  initCurrentUserSession
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);