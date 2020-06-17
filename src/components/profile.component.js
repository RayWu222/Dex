import React, {Component} from 'react';
import axios from 'axios';

import { ReactComponent as Logo } from './img/dexOwl.svg';
import UserList from './userFlashcardSets.component';
import {UserInfo} from './userInfo.component';


export default class Profile extends Component{
    state = {
        userName: "",
        userEmail: "",
        userToken: "",
        userImage: "",
        userID: ""
        // userName: this.props.name,
        // userEmail: this.props.email,
        // userToken: this.props.token,
        // userImage: this.props.image,
        // userID: this.props.id
    }
  
    

    componentDidMount(){
        axios.get('http://localhost:4000/getUser/'+sessionStorage.getItem("SessionUserGoogleId"))
            .then(response => {
                
                this.setState({
                    userName: response.data.userName,
                    userEmail: response.data.email,
                    userToken: response.data.userToken,
                    userImage: response.data.userImage
                })
                
            })
    }

  

    render(){
        console.log("userEmail " + this.state.userEmail)
        return(
            <div>
                
                <h3><strong>User: {this.state.userName}</strong></h3> 
                <h3><strong>Email: {this.state.userEmail}</strong></h3> 

                <img src = {this.state.userImage} alt = "image"></img>             
                         
                <br></br>
               
                
                <UserList></UserList>
                
                
            </div>
        )
    }

}
