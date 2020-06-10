import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";

//A non-package implementation of Google OAuth2 Sign in

const clientId =
  "293901008493-duqun9t52bo7dtjbo4n1900nite8sube.apps.googleusercontent.com";

export default class SignIn extends Component {
  componentDidMount() {
    console.log("Loading");
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id: clientId,
      });
    });
    console.log("Api inited");
  }

  render() {
    return (
        <div className="google-sign-in">
          <h3 className="signin-title">Sign in with Google below!</h3>
          <div class="g-signin2" data-onsuccess="onSignIn"></div>
        </div> 
    );
  }
}
