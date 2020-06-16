import React, { Component } from "react";
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from "./img/dexOwl.svg";
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
                    </ul>
                </nav>
            </div> 
        )
    }
}
