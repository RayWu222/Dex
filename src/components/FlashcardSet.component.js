import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import Flashcard from './flashcard.component';


const FlashcardSet = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [numFlashcards, setNumFlashcards] = useState(0);
    const [flashcards, setFlashcards] = useState([]);
   

    
    // re-rendering in response to some kind of change, such as state change, API requests, etc.
    React.useEffect(() => {

    });

    

    const addNewFlashcard = () => {
            var newFlashcard = <Flashcard counter={num => (
                numFlashcards
              )}/>
            setFlashcards(flashcards.concat(newFlashcard))
            setNumFlashcards(numFlashcards+1)
            localStorage.setItem(
                ("flashcardPair" + numFlashcards),
                newFlashcard.getSaveData()
            );
    }

    const submitFlashcardSet = (e) => {
        e.preventDefault()

        axios.post('http://localhost:4000/create', {
            title, author, description, category, flashcards
        })
        .then(res => console.log(res.data));     
        
        alert("Flashcard Set Submitted");
        setTitle('');
        setAuthor('');
        setDescription('');
    }

        return (
            <form onSubmit={submitFlashcardSet} method="post" action='/create'>

            <div class="title-container">
                <div class="title-name">
                    <h3>Create New Flashcard Set</h3>
                </div>
                    <div>
                        <div className="form-group">
                            <div class="form-title"> 
                                <label>Title: </label>
                            </div>
                            <div class="form-input">
                                <input  
                                    type="text"
                                    className="form-control"
                                    onChange={event => setTitle(event.target.value)}
                                    />
                            </div>        
                        </div>
                        <div className="form-group">
                            <div class="form-title">
                                <label>Author: </label>
                            </div>
                            <div class="form-input">
                                <input 
                                    type="text" 
                                    className="form-control"
                                    onChange={event => setAuthor(event.target.value)}
                                    />
                            </div>        
                        </div>
                        <div className="form-group">
                            <div class="form-title">
                                <label>Description: </label>
                            </div>
                            <div class="form-input">
                                <input 
                                    type="text"
                                    className="form-control"
                                    onChange={event => setDescription(event.target.value)}
                                    />
                            </div>
                        </div>
                        <div className="form-group">
                            <div class="form-title">
                                <label>Category: </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" value="math" checked={category === 'Math'} onChange={event => setCategory('Math')}/>
                                    Math
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" value="science" checked={category === 'Science'} onChange={event => setCategory('Science')} />
                                    Science
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" value="english" checked={category === 'English'} onChange={event => setCategory('English')}/>
                                    English
                                </label>
                            </div>
                            <div>
                                <label>
                                    <input type="radio" value="other" checked={category === 'English'} onChange={event => setCategory('Other')}/>
                                    Other
                                </label>
                            </div>
                        </div>
                    </div>
                <div>
                    <ul>
                        {flashcards.map(flashcard => (
                            <li key={flashcard.id}>{flashcard}</li>
                        ))}
                    </ul>
                </div>

                <button
                    className="search-field-button"
                    type="button"
                    onClick={() => addNewFlashcard()}>
                    Add Flashcard
                </button>

                <button
                    className="search-field-button"
                    type="button"
                    onClick={() => submitFlashcardSet}>
                    Submit
                </button>
                
            </div>
            </form>
        )
    
}

export default FlashcardSet;