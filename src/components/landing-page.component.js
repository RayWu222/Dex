import React, { Component } from "react";
import { ReactComponent as Logo } from "./img/dexOwl.svg";
import { Link } from "react-router-dom";

//A component that contains the landing page information and copy
export default class LandingPage extends Component {
  render() {
    return (
        <div className="page-container">
          <h1 className="page-title">Welcome to Dex!</h1>
            <Link className="logo" id="nav-logo" to="/">
              <Logo className="landing-icon" alt="owl icon" />
            </Link>
          <div className="landing-body">
          <h3>
            Remember when you had hundreds of boxes of different flashcards? Well
            maybe you don't but you definitely are familiar with flashcards. Well
            Dex is here to bring it all back. It's never been easier to create,
            manage and share your decks with your classmates and colleagues. This
            is the one stop shop to create, edit and share your flashcards. Our model
            is dedicated to both text and images, so whatever you need to memorize, you
            can. Upload a diagram, chart or image to your flashcards for a more
            immerisive feel. Search user created decks for a subject you need a
            crash course in. All of it availble here at Dex. The Study App.
          </h3>
          </div>
        </div>
    );
  }
}
