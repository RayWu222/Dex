import React, { Component } from "react";
import "../App.css";

//import logo from './logo.png';
import { ReactComponent as Logo } from "./img/dexOwl.svg";
//import search-bar
import Bar from "./search-bar.component";

// A Navigation bar component allowing the free movement between sections of the application
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-container">
        <Logo className="navbar-logo" />
        <nav className="navbar">
          <ul className="navbar-left">
            <a className="nav-left" href="/">
              Home
            </a>
            <a className="nav-left" href="/create">
              Create
            </a>
            <a className="nav-left" href="/list">
              List
            </a>
          </ul>
          <ul>
            <Bar id="navbar-search-bar"></Bar>
          </ul>
          <ul className="navbar-right">
            <a className="nav-right" href="/signout">
              Sign Out
            </a>
            <a className="nav-right" href="/signin">
              Login
            </a>
          </ul>
        </nav>
      </div>
    );
  }
}
