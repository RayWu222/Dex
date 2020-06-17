import React, { useState, useEffect } from "react";
import axios from "axios";
import Flashcard from "./flashcard.component";
import { useParams } from 'react-router-dom';
//A component to allow the editting of flashcard sets already created in the database.


const EditFlashcardSet = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [numFlashcards, setNumFlashcards] = useState("");
  const [flashcards, setFlashcards] = useState([]);


  const submitFlashcardSet = (e) => {
    e.preventDefault();

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

    alert("Flashcard Set Updated");
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/edit/:id", {
        params: {
          value: id
        }
      })
      .then((response) => {
        setTitle(response.data[0].title)
        setAuthor(response.data[0].author)
        setDescription(response.data[0].description)
        setCategory(response.data[0].category)
        setNumFlashcards(response.data[0].numFlashcards)
        setFlashcards(response.data[0].JSON.stringify(flashcards))
      })
      .catch(function (error) {
        console.log(error);
      });
    
  }, []);

  return (
    <form onSubmit={submitFlashcardSet} method="post" action="/create">
      <div className="title-container">
        <div className="title-name">
          <h3>Edit Flashcard Set</h3>
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
                value={title}
                onChange={(event) => setTitle(event.target.value)}
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
                onChange={(event) => setAuthor(event.target.value)}
                value={author}
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
                value={description}
                onChange={(event) => setDescription(event.target.value)}
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

        {/* <button
          className="search-field-button"
          type="button"
          onClick={() => addNewFlashcard()}
        >
          Add Flashcard
        </button> */}

        <button
          className="search-field-button"
          type="button"
          onClick={(e) => submitFlashcardSet(e)}
        >
          Submit Flashcard Set
        </button>
      </div>
    </form>
  );
};



export default EditFlashcardSet;
