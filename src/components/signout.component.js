<<<<<<< HEAD
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {GoogleLogout} from 'react-google-login';


const responseGoogle=(response) => {
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.name)
    
}

// Using Google oauth api to logout user
const signOutPass = () => {
    console.log("signout")
    
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {
        console.log('User signed out.');
        sessionStorage.clear();
        window.location.replace("http://localhost:3000")

    });   
    //alert("Your logoutgoogleLogout done."); 
    
}

export class SignOut extends Component {
   

    render() {
        return (
            <div className="google-logout-container">
                <GoogleLogout
                clientId="293901008493-duqun9t52bo7dtjbo4n1900nite8sube.apps.googleusercontent.com"
               
                render={renderProps => (
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out Button</button>
                  
                )}
                onLogoutSuccess={signOutPass}
            ></GoogleLogout>
              
            </div>

           
        )
    }

       

}

export default SignOut
=======
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
>>>>>>> 148c5b3a062fe1db99f124f549a10e29d5ab3756
