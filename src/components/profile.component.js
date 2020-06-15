import React, {Component} from 'react';
import axios from 'axios';

import { ReactComponent as Logo } from './img/dexOwl.svg';
import UserList from './userFlashcardSets.component';
import {UserInfo} from './userInfo.component';


export default class Profile extends Component{
    state = {
        userName: this.props.name,
        userEmail: this.props.email,
        userToken: this.props.token,
        userImage: this.props.image,
        userID: this.props.id
    }
  


    render(){
       console.log(localStorage.getItem('UserInfoName'))
        return(
            <div>
                <h5><strong>User: {localStorage.getItem('UserInfoName')}</strong></h5>               
                <img src = {localStorage.getItem('UserInfoImage')} alt = "image"></img>             
                <br></br>
               
                
                <UserList></UserList>
                
                
            </div>
        )
    }

}
