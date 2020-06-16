import React, { Component } from "react";
import "../App.css";
import FlashcardSet from "./FlashcardSet.component";

//Simple Create FlashCard component that contains all information for submitting a flashcard set to the database.
export default class CreateFlashcardSet extends Component {
  render() {
    return (
        <FlashcardSet></FlashcardSet>
    );
  }
}
