import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {GoogleLogout} from 'react-google-login';


const responseGoogle=(response) => {
    console.log(response.profileObj);
    console.log(response.profileObj.email);
    console.log(response.profileObj.name)
    
}

// Using Google oauth api to logout user
const signOut = () => {
    console.log("signout")
    
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signOut().then(function () {
        console.log('User signed out.');
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
                  <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Log Out Google button</button>
                  
                )}
                
                onLogoutSuccess={signOut}
                onFailure={"fail"}
                prompt = {"bye"}
               
               ></GoogleLogout>
              
            </div>

           
        )
    }


}

export default SignOut