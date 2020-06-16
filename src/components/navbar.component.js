import React, { Component } from "react";
import "../App.css";

//import logo from './logo.png';
<<<<<<< HEAD
import { ReactComponent as Logo } from './img/dexOwl.svg'; 
import Axios from 'axios';
import {SignOut} from "./signout.component"

//submit a value and search


=======
import { ReactComponent as Logo } from "./img/dexOwl.svg";
//import search-bar
import Bar from "./search-bar.component";
>>>>>>> 148c5b3a062fe1db99f124f549a10e29d5ab3756

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
<<<<<<< HEAD
                            
                    </ul>

                    <form class="navbar-form" name = "Test" >
                        <input class="navbar-text"  placeholder="Search" id ="search"/>
                        <a class="navbar-submit"  type = "submit" onClick ={this.getSearch} > Submit</a>
                    </form>

                    <ul class="navbar-right">
                            <a class="nav-right" href="/signout">Sign out</a>
                            <a class="nav-right" href="/signin">Login</a>
                            <a class="nav-right" href= "/user"> {sessionStorage.getItem("SessionUserName")} </a>
                        
=======
                            <a class="nav-left" href="/browse">Browse</a>
                            
                    </ul>

                    {/* <form className="navbar-form" name = "Test" >
                        <input className="navbar-text"  placeholder="Search" id ="search"/>
                        <a className="navbar-submit"  type = "submit" onClick ={this.getSearch} > Submit</a>
                    </form> */}
                    <Bar/>
                    <ul className="navbar-right">
                            <a className="nav-right" href="/signup">Sign Up</a>
                            <a className="nav-right" href="/signin">Login</a>
>>>>>>> 148c5b3a062fe1db99f124f549a10e29d5ab3756
                    </ul>
                </nav>
            </div> 
        )
    }
}
