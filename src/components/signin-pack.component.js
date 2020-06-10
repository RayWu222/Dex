import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login';
import NavBar from "./navbar.component"
import {withRouter} from "react-router-dom"



//value of the Google API Client
//clientId = '293901008493-duqun9t52bo7dtjbo4n1900nite8sube.apps.googleusercontent.com'

//create variable for name,id, and email



let name;
let id;
let email;

//get Google info 
const responseGoogle=(response) => {
    console.log(response.profileObj);
    console.log(response.profileObj.email)
    name = response.profileObj.givenName;
    id = response.profileObj.googleId;
    email = response.profileObj.email;
    console.log("name: " + name)
    console.log("id: " + id)
    console.log("email: " + email)
    
    
}

// const Profile = () => {
//     const { googleUser } = GoogleLogin()
// }
export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {data: ""}
        
    }


    
    componentDidMount(){
        this.response = name;
    }
    

    

    // SignIn = () => {
    //     this.props.history.push(name)
    // }
    
    
    render() {
        
        return (
            
            
                
                

                <div>
                
                <div className="google-login-container">
                    <GoogleLogin
                    clientId="293901008493-duqun9t52bo7dtjbo4n1900nite8sube.apps.googleusercontent.com"
                    render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={console.log("fail")}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                    
                />
                {/* {console.log("responseGoogleID:" + response.profileObj.givenName)} */}
                {/* <h1><strong>Hi, {testName}</strong></h1> */}
                
                </div>
                {/* <NavBar name= {this.}></NavBar> */}
                </div>
           
               
            
            
        )
    }
}
export default SignIn