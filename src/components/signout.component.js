import React, { Component } from "react";

//A Google OAuth2 signout component to ensure safe sign out from the application
export default class SignOut extends Component {
  render() {
    return (
      <div>
        <h3>SignOut Page</h3>
        <script>
          var auth2 = gapi.auth2.getAuthInstance();
          auth2.signOut().then(function ()
        </script>
      </div>
    );
  }
}
