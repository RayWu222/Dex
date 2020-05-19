import React, { Component } from 'react';
import {ReactComponent as Logo} from './img/dexOwl.svg';

export default class Footer extends Component{

    render(){
        return(
            <div class = "footer-container">
            <div class = "footer links left"></div>
               <Logo class = "footer-logo"/>
               <div class = "footer-links">
                <strong>Links</strong> 
                            <ul>
                                <li><a href ="/" Home>Home</a></li> 
                                <li><a href ="/create" Create>Create</a></li> 
                                <li><a href ="/list" List>List</a></li>
                                <li><a href ="/search" Search>Search</a></li>
                                <div class = "copy-colorblack">
                                  <a >© 2020 All Rights Reserved ~ Authored by AD410 Group C</a>
                                  </div> 
                            </ul>
                        
               </div>
               </div>
               
               

            
        )

    }
}

