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
    var newFlashcard = <Flashcard counter={(num) => numFlashcards} />;
    setFlashcards(flashcards.concat(newFlashcard));
    setNumFlashcards(numFlashcards + 1);
  };

  const submitFlashcardSet = (event) => {
    event.preventDefault();

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
              onChange={(event) => setTitle(event.target.value)}
              />
          </div>
          <div className="form-group">
            <div className="form-title">
              <label>Author: </label>
            </div>
              <input
                type="text"
                className="form-input"
                onChange={(event) => setAuthor(event.target.value)}
              />
          </div>
          <div className="form-group">
            <div className="form-title">
              <label>Description: </label>
            </div>
              <input
                type="text"
                className="form-input"
                onChange={(event) => setDescription(event.target.value)}
              />
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
                  className="category-buttons"
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
                  className="category-buttons"
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
                  className="category-buttons"
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
    </form>
  );
};

export default FlashcardSet;
