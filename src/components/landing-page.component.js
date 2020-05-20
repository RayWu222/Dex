import React, { Component } from 'react';
import { ReactComponent as Logo } from './img/dexOwl.svg';
import { Link } from 'react-router-dom';

 


export default class LandingPage extends Component {
    render() {
        return (
            <div class="container-landing">
                <h3 class="title" >Landing Page</h3>
                    <Link class="icon" to="/">
                    <Logo class="icon" id="landing-page-logo" alt="owl icon" />
                    </Link>
                    <p class="body-text" id="landing-page-text">
                    Remember when you had hundreds of boxes of different flashcards? Well maybe you don't but you definitely are familiar with flashcards.
                    Well Dex is here to bring it all back. It's never been easier to create, manage and share your decks with your classmates and colleagues.
                    Upload a diagram, chart or image to your flashcards for a more immerisive feel. Search user created decks for a subject you need a crash course in.
                    All of it availble here at Dex. The Study App.
                    </p>
            </div>
        )
    }
    
}
