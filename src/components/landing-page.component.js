import React, { Component } from "react";
import { ReactComponent as Logo } from "./img/dexOwl.svg";
import { Link } from "react-router-dom";

//A component that contains the landing page information and copy
export default class LandingPage extends Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="page-container">
          <h1 className="page-title">Welcome to Dex!</h1>
            <Link className="landing-icon" to="/">
              <Logo className="landing-icon" alt="owl icon" />
            </Link>
          <h3 className="landing-body">
            Remember when you had hundreds of boxes of different flashcards? Well
            maybe you don't but you definitely are familiar with flashcards. Well
            Dex is here to bring it all back. It's never been easier to create,
            manage and share your decks with your classmates and colleagues.
            Upload a diagram, chart or image to your flashcards for a more
            immerisive feel. Search user created decks for a subject you need a
            crash course in. All of it availble here at Dex. The Study App.
          </h3>
          <p className="landing-body">
          Where lies the strangling fruit that came from the hand of the sinner I shall bring forth the seeds of the dead to share with the worms that gather in the darkness and surround the world with the power of
           their lives while from the dimlit halls of other 
          places forms that never were and never could be writhe for the impatience of the few who never saw what could have been. In the black water with the sun 
          shining at midnight, those fruit shall come ripe and in the darkness of that which is golden shall split open to reveal the revelation of the fatal softness in the earth. The 
          shadows of the abyss are like the petals of a monstrous flower that shall blossom within the skull and expand the mind beyond what any man can bear, but whether it
           decays under the earth or above on green fields, or out to sea or in the very air, all shall come to revelation, and to revel, in the knowledge of the strangling fruit—and the hand of the sinner shall rejoice, for there
           is no sin in shadow or in light that the seeds of the dead cannot forgive. And there shall be in the planting in the shadows a grace and a mercy from 
          which shall blossom dark flowers, and their teeth shall devour and sustain and herald the passing of an age. That which dies shall still know life in death for
          all that decays is not forgotten and reanimated it shall walk the world in the bliss of not-knowing. And then there shall be a fire that knows 
          the naming of you, and in the presence of the strangling fruit, its dark flame shall acquire every part of you that remains.
          </p>
        </div>
      </div>
    );
  }
}
