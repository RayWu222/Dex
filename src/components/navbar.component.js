import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg'; 

export default class Navbar extends Component {
    render (){
                    return (
            <div class="nav-container">     
                <div class="navbar-brand" href="/">
                <Logo class="logo" />
                </div>
                <nav class="navbar">    
                    <ul class="navbar-left">
                            <a class="nav-left" href="/">Home</a>
                            <a class="nav-left" href="/create">Create</a>
                            <a class="nav-left" href="/list">List</a>
                    </ul>

                    <form class="navbar-form">
                        <input class="navbar-text" placeholder="Search" />
                        <a class="navbar-submit" href="/search" >Search</a>
                    </form>

                    <ul class="navbar-right">
                            <a class="nav-right" href="/signup">Sign Up</a>
                            <a class="nav-right" href="/signin">Login</a>
                    </ul>
                </nav>
            </div> 
            

            /* Dropdown Code 
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
            */
        )
    }
}
