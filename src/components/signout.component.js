import React, { Component } from "react";

//A Google OAuth2 signout component to ensure safe sign out from the application
export default class SignOut extends Component {
  render() {
    return (
      <div className="page-container">
        <script>
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function ()
        </script>

        <h1 className="page-title">UNDER CONSTRUCTION</h1>
      </div>
    );
  }
}
