import React, { Component } from "react";
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg'; 
import Axios from 'axios';
import {SignOut} from "./signout.component"

//import search-bar
import Bar from "./search-bar.component";

// A Navigation bar component allowing the free movement between sections of the application
export default class Navbar extends Component {


    
    getSearch(){
        //var search = document.getElementsByName("Test");
        var searchValue = document.getElementById("search").value;
        console.log(searchValue);
        //window.location.replace("http://localhost:3000/flashcardSet/search/" + searchValue)
        window.location.replace("http://localhost:3000/flashcardSet/search/search?flashcardSet_title=" + searchValue)
        
    }

  
    

    render (){
                    return (
            <div className="nav-container">     
                <div className="navbar-brand" href="/">
                <Logo className="logo" />
                </div>
                <nav class="navbar">    
                    <ul class="navbar-left">
                            <a class="nav-left" href="/">Home</a>
                            <a class="nav-left" href="/create">Create</a>
                            <a class="nav-left" href="/list">List</a>
                            
                    </ul>

                    <Bar></Bar>
                

                    <ul class="navbar-right">
                            <a class="nav-right" href="/signout">Sign out</a>
                            <a class="nav-right" href="/signin">Login</a>
                            <a class="nav-right" href= "/user"> {sessionStorage.getItem("SessionUserName")} </a>
                        
                    </ul>
                </nav>
            </div> 
        )
    }
}
