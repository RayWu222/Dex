import React, { Component } from 'react';
import {ReactComponent as Logo} from './img/dexOwl.svg';
export default class Footer extends Component{
    render(){
        return(
            <footer class = "footer-container">
            <div class = "footer links left">
               <Logo class = "footer-logo"/>
               </div>
               <div class = "footer-links">
                <strong>Pages</strong> 
                            <ul>
                                <li><a class = "home" href ="/" Home>Home</a></li> 
                                <li><a href ="/create" Create>Create</a></li> 
                                <li><a href ="/list" List>List</a></li>
                                <li><a href ="/search" Search>Search</a></li>
                                
                            </ul>
               </div>
               <div class = "footer-subject">
               <strong>Subjects</strong> 
                            <ul>
                                <li><a href ="/" Math>Math</a></li> 
                                <li><a href ="/create" Science>Science</a></li> 
                                <li><a href ="/list" English>English</a></li>
                            </ul>
               </div>
               <div class = "footer-social-media">
               <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
               <strong>Social Media:</strong> 
                            <ul>
                            <a href="#" class="fa fa-facebook"></a>
                            <a href="#" class="fa fa-twitter"></a>
                            <a href="#" class="fa fa-reddit"></a>
                            <a href="#" class="fa fa-google"></a>
                            </ul>
               </div>
               <div class = "copy-colorblack">
                                  <p>© 2020 All Rights Reserved ~ Authored by AD410 Group C</p>
                                </div> 
               </footer>
        )
    }
}