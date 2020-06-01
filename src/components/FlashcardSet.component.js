import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../App.css";
import Flashcard from './flashcard.component';

const flashcardList = [<Flashcard />]
const num = 2;

const FlashcardSet = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    //const [numFlashcards] = useState(num);
    const [flashcards, setFlashcards] = useState(flashcardList);

    
    // re-rendering in response to some kind of change, such as state change, API requests, etc.
    React.useEffect(() => {
        setTitle(' ');
        setAuthor(' ');
        setDescription(' ');
    });



    const handleClick = () => {
        if (flashcards) {
            setFlashcards(flashcardList.concat(flashcards))
        }
    }

    const submitFlashcardSet = (e) => {
        e.preventDefault()
        alert("Flashcard Set");
       

        
        axios.post('http://localhost:4000/create', {
            title, author, description, category, flashcards
        })
        .then(res => console.log(res.data));        
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
                            <li key={flashcard}>{flashcard}</li>
                        ))}
                    </ul>
                </div>

                <button
                    className="search-field-button"
                    type="button"
                    onClick={handleClick}>
                    Add Flashcard
                </button>

                <button
                    className="search-field-button"
                    type="button"
                    onClick={submitFlashcardSet}>
                    Submit
                </button>
                
            </div>
            </form>
        )
    
}

export default FlashcardSet;