import React, {Component} from 'react';
import axios from 'axios';

import { ReactComponent as Logo } from './img/dexOwl.svg';
import Userlist from './userFlashcardSets.components'


var username;
var firstname;
var lastname;
var password;

export default class Profile extends Component{

    

    constructor(props){
        super(props);
        this.state = {persons:[]}
    }
    
    


    componentDidMount(){
        axios.get('http://localhost:4000/user/foobar')
        .then(response =>{
            this.setState({persons:response.data})
            console.log("1. " + (JSON.stringify(response.data)))
            // username = JSON.stringify(response.data.username)
            // firstname = JSON.stringify(response.data.firstName)
            // lastname = JSON.stringify(response.data.lastName)
            // password = JSON.stringify(response.data.password)
            console.log("username " + test)
            
            
            
        })
        .catch(function(error){
            console.log(error);
        })

    }


    render(){
        return(
            
            <div>
                <h1>User Profile</h1>
                
                <img src = "./img/dexOwl.png" alt = "image"></img>
            
                
                
                <br></br>
                <h3>Name: {this.state.persons.firstName} {this.state.persons.lastName} </h3>
                {/* <h3>password = {this.state.persons.firstName}   </h3> */}
                <button>edit</button>
                <Userlist></Userlist>
                

               

                
            </div>
        )
    }

    
}