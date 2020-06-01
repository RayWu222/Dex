import React, { Component } from 'react';
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from './img/dexOwl.svg'; 
//import search-bar
import Bar from './search-bar.component';

export default class Navbar extends Component {
    
    render (){
                    return (
            <div className="nav-container">     
                <Logo className="navbar-logo"/>
                <nav className="navbar">    
                    <ul className="navbar-left">
                            <a className="nav-left" href="/">Home</a>
                            <a className="nav-left" href="/create">Create</a>
                            <a className="nav-left" href="/list">List</a>
                    </ul>
                    <ul>
                        <Bar id="navbar-search-bar"></Bar>
                    </ul>
                    <ul className="navbar-right">
                            <a className="nav-right" href="/signout">Sign Out</a>
                            <a className="nav-right" href="/signin">Login</a>
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
