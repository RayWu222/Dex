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
    //const [category, setCategory] = useState('');
    //const [numFlashcards] = useState(num);
    const [flashcards, setFlashcards] = useState(flashcardList);

    
    // re-rendering in response to some kind of change, such as state change, API requests, etc.
    React.useEffect(() => {
        
    });
    
    


    const handleClick = () => {
        if (flashcards) {
            setFlashcards(flashcardList.concat(flashcards))
        }
    }


    const submitHandler = e => {
        e.preventDefault()
        alert(title + ", " + author + ", " + description);
       

        
        axios.post('http://localhost:4000/create', {
            title, author, description
        })
        .then(res => console.log(res.data));
        
        setTitle(' ');
        setAuthor(' ');
        setDescription(' ');
        
    }

    

    


        


        return (
            <form onSubmit={submitHandler} method="post" action='/create'>
            <div class="title-container">
                <div class="title-name">
                    <h3>Create New Flashcard Set</h3>
                </div>
                    <div className="form-group">
                        <div class="form-title"> 
                            <label>Title: </label>
                        </div>
                        <div class="form-input">
                            <input  
                                type="text"
                                className="form-control"
                                onChange={event => setTitle(event.target.value)}
                                value={title}
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
                    onClick={submitHandler}>
                    Submit
                </button>
                
            </div>
            </form>
        )
    
}

export default FlashcardSet;