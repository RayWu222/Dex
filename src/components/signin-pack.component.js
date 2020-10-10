import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
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
       
        
        sessionStorage.setItem('SessionUserName', this.state.name);
        sessionStorage.setItem('SessionUserEmail', this.state.email);
        sessionStorage.setItem('SessionUserGoogleId', this.state.token)
        sessionStorage.setItem('SessionUserImage', this.state.image);
        sessionStorage.setItem('SessionUserInfoId', this.state.id);
        console.log("session" + sessionStorage.getItem('SessionUserName'))
        window.location.replace("http://localhost:3000")
       
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

                <div className="page-container">
                    <h1 className="page-title">User Console</h1>
             
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
                    <button className="search-submit-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign In Button</button>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={console.log("fail")}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                    
                />
                
                
                </div>
                <div>
                    
                </div>    
                </div>
           
               
            
            
        )
    }
}

export default SignIn