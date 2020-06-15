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
  useEffect(() => {});

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
      <div className="title-container">
        <div className="title-name">
          <h3>Create New Flashcard Set</h3>
        </div>
        <div>
          <div className="form-group">
            <div className="form-title">
              <label>Title: </label>
            </div>
            <div className="form-input">
              <input
                type="text"
                className="form-control"
                onChange={(event) => saveFlashcardSet(event.target.value, 'title')}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-title">
              <label>Author: </label>
            </div>
            <div className="form-input">
              <input
                type="text"
                className="form-control"
                onChange={(event) => saveFlashcardSet(event.target.value, 'author')}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-title">
              <label>Description: </label>
            </div>
            <div className="form-input">
              <input
                type="text"
                className="form-control"
                onChange={(event) => saveFlashcardSet(event.target.value, 'description')}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-title">
              <label># Flashcards: </label>
            </div>
            <div className="form-input">
              <input
                type="text"
                className="form-control"
                readOnly = {true}
                value={numFlashcards}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-title">
              <label>Category: </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="math"
                  checked={category === "Math"}
                  onChange={(event) => setCategory("Math")}
                />
                Math
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="science"
                  checked={category === "Science"}
                  onChange={(event) => setCategory("Science")}
                />
                Science
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="english"
                  checked={category === "English"}
                  onChange={(event) => setCategory("English")}
                />
                English
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="other"
                  checked={category === "Other"}
                  onChange={(event) => setCategory("Other")}
                />
                Other
              </label>
            </div>
          </div>
        </div>
        <div>
          <ul>
            {flashcards.map((flashcard, i) => (
              <li key={i}>{flashcard}</li>
            ))}
          </ul>
        </div>

        <button
          className="search-field-button"
          id="add-flashcard"
          type="button"
          onClick={() => addNewFlashcard()}
        >
          Add Flashcard
        </button>

        <button
          className="search-field-button"
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
