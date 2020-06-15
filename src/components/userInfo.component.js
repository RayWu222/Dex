import React, { Component } from 'react';
import Profile from './profile.component'
import UserList from './userFlashcardSets.component';
import axios from 'axios'
export class UserInfo extends Component{

    state = {
        userFirstName: this.props.name,
        userEmail: this.props.email,
        userToken: this.props.token,
        userImage: this.props.image,
        userID: this.props.id
    }

    
    //return this class state informaiton
    changeName = () =>{
        
        console.log("state user first name " + this.state.userFirstname)
        
        return this.state.userFirstname;
    }
    

    //put parent component to this child state
    //change it tomorrow to accept props, state is not working right
    componentWillReceiveProps(props){
        console.log(props.name)
        this.setState({
            userFirstName: props.name,
            userEmail:props.email,
            userToken:props.token,
            userImage:props.image,
            userID:props.id})
            console.log("axios" + props.name)
            axios.post('http://localhost:4000/addUser', {
                userName: props.name,
                email: this.state.userEmail,
                token: this.state.userToken,
                userImage: this.state.userImage
                
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    }


    render(){
        
        return(
            <div>
            <div><p onClick={this.changeName}>Hi, {this.state.userFirstName}</p></div>
            <h1>Name: {this.props.name}</h1>
            <Profile name = {this.state.userFirstName}></Profile>
            <UserList></UserList>
            
            
            </div>
        )
    }
}


export default UserInfo