import React, { Component } from 'react';
import {ReactComponent as Logo} from './img/dexOwl.svg';
export default class Footer extends Component{
    render(){
        return(
            <div class = "footer-container">
            <div class = "footer links left">
               <Logo class = "footer-logo"/>
               </div>
               <div class = "footer-links">
                <strong>Links</strong> 
                            <ul>
                                <li><a href ="/" Home>Home</a></li> 
                                <li><a href ="/create" Create>Create</a></li> 
                                <li><a href ="/list" List>List</a></li>
                                <li><a href ="/search" Search>Search</a></li>
                                <div class = "copy-colorblack">
                                  <p>© 2020 All Rights Reserved ~ Authored by AD410 Group C</p>
                                </div> 
                            </ul>
               </div>
               <div class = "subject-right">
               <strong>Subjects</strong> 
                            <ul>
                                <li><a href ="/" Math>Math</a></li> 
                                <li><a href ="/create" Science>ience</a></li> 
                                <li><a href ="/list" English>English</a></li>
                                <li><a href ="/search" Search>Search</a></li>
                            </ul>
               </div>
               </div>
        )
    }
}