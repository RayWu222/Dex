import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import GoogleLogin from 'react-google-login';
import NavBar from "./navbar.component"
import {withRouter} from "react-router-dom"
import axios from 'axios'
import UserInfo from "./userInfo.component"


export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:"",
            email: "",
            token:"",
            image:"",
            id:""
            
    };
        
    }
   


    //return this class state informaiton
    changeName = () =>{
        
        console.log("state " + this.state.name)
    
        return this.state.name;
    }

    //get userinformation
    signup(res){
        const googleresponse ={
            name: res.profileObj.name,
            email: res.profileObj.email,
            token: res.profileObj.googleId,
            image: res.profileObj.imageUrl,
            providerId: 'Google'
            
        };
        //this.state.name = res.profileObj.name;
        this.setState({
            name: res.profileObj.name,
            email:res.profileObj.email,
            token:res.profileObj.googleId,
            image:res.profileObj.imageUrl,
            id: 'Google'}
        )
        // localStorage.setItem('UserInfo', JSON.stringify(googleresponse));
        localStorage.setItem('UserInfoName', this.state.name);
        localStorage.setItem('UserInfoEmail', this.state.email);
        localStorage.setItem('UserInfoToken', this.state.token);
        localStorage.setItem('UserInfoImage', this.state.image);
        localStorage.setItem('UserInfoId', this.state.id);
       
    }

    

    
    
    //initalize Googe Login, get user information
    render() {
        const responseGoogle=(response) => {
            console.log(response.profileObj);
            console.log(response.profileObj.email)
            var name = response.profileObj.givenName;
            var id = response.profileObj.googleId;
            var email = response.profileObj.email;
            console.log("name: " + name)
            console.log("id: " + id)
            console.log("email: " + email)
            console.log("image: " + response.profileObj.imageUrl)
            this.signup(response);
            this.state.name = this.changeName();
            console.log("this name: " + this.state.name)
        }
       
        return (
            
            
            
                <div>
                
                
               
                <div>
                    <UserInfo 
                    name = {this.state.name} 
                    email = {this.state.email} 
                    token = {this.state.token} 
                    image = {this.state.image}
                    id = {this.state.id}>

                    </UserInfo>
                </div>
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
                
                
                </div>
                
                </div>
           
               
            
            
        )
    }
}

export default SignIn