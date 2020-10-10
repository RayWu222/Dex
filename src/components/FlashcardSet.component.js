import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Flashcard from "./flashcard.component";

//A component to represent and implement a flashcard object, multiple of these instances make a deck
const FlashcardSet = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [numFlashcards, setNumFlashcards] = useState(0);
  const [flashcards, setFlashcards] = useState([]);

  // re-rendering in response to some kind of change, such as state change, API requests, etc.
  React.useEffect(() => {
    addNewFlashcard()
  }, []);

  const addNewFlashcard = () => {
    var newFlashcard = <Flashcard props={(num) => numFlashcards}  />;
    setFlashcards(flashcards.concat(newFlashcard));
    var numb = (flashcards.length + 1);
    setNumFlashcards(numb);
  };

  const saveFlashcardSet = (event, value) => {
    if(value === 'title') {
      setTitle(event)
    }
    if(value === 'author') {
      setAuthor(event)
    }
    if(value === 'description') {
      setDescription(event)
    }

  }

  const submitFlashcardSet = (event) => {
    event.preventDefault();

    saveFlashcardSet();

    axios
      .post("http://localhost:4000/create", {
        title,
        author,
        description,
        category,
        numFlashcards,
        flashcards,
      })
      .then((res) => console.log(res.data));

    alert("Flashcard Set Submitted");
  };

  return (
    <form onSubmit={submitFlashcardSet} method="post" action="/create">

      <div class="app-wrapper">
        <h1 className="page-title">Create New Flashcard Set</h1>
          <div className="form-group">
            <label className="form-title">Title: </label>
            <input
              type="text"
              className="form-input"
              onChange={(event) => saveFlashcardSet(event.target.value, 'title')}
              />
          </div>
          <div className="form-group">
              <label className="form-title">Author: </label>
              <input
                type="text"
                className="form-input"
                onChange={(event) => saveFlashcardSet(event.target.value, 'author')}
              />
          </div>
          <div className="form-group">
            <label className="form-title">Description: </label>
              <input
                type="text"
                className="form-input"
                onChange={(event) => saveFlashcardSet(event.target.value, 'description')}
              />
          </div>
          <div className="form-group">
              <label className="form-title"># Flashcards: </label>
              <input
                type="text"
                className="form-input"
                readOnly = {true}
                value={numFlashcards}
              />
          </div>
          <div className="form-group">
              <label className="form-title">Category: </label>
              <label>
                <input
                  type="radio"
                  value="math"
                  checked={category === "Math"}
                  onChange={(event) => setCategory("Math")}
                />
                Math
              </label>
              <label>
                <input
                  className="category-buttons"
                  type="radio"
                  value="science"
                  checked={category === "Science"}
                  onChange={(event) => setCategory("Science")}
                />
                Science
              </label>
            <label>
              <input
                className="category-buttons"
                type="radio"
                value="english"
                checked={category === "English"}
                onChange={(event) => setCategory("English")}
              />
              English
            </label>
            <label>
              <input
                className="category-buttons"
                type="radio"
                value="other"
                checked={category === "Other"}
                onChange={(event) => setCategory("Other")}
              />
              Other
            </label>
          </div>
      

        <div>
          <ul className="flashcard-list-item">
            {flashcards.map((flashcard) => (
              <li key={flashcard.id}>{flashcard}</li>
            ))}
          </ul>
        </div>

        <button
          className="search-submit-button"
          id="add-flashcard"
          type="button"
          onClick={() => addNewFlashcard()}
        >
          Add Flashcard
        </button>

        <button
          className="search-submit-button"
          id="submit-flashcard-button"
          type="button"
          onClick={(event) => submitFlashcardSet(event)}
        >
          Submit Flashcard Set
        </button>

      </div>
    </form>
  );
};
export default FlashcardSet;
