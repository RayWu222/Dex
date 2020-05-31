import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import "../App.css";
import Flashcard from './flashcard.component';

const flashcardList = [<Flashcard />, <Flashcard />]
const num = 2;
const FlashcardSet = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [numFlashcards] = useState(num);
    const [flashcards, setFlashcards] = useState(flashcardList);

    /*
    // re-rendering in response to some kind of change, such as state change, API requests, etc.
    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', value);
    }, [value]);
    axios.post('http://localhost:4000/flashcardSet/add', newFlashcardSet)
            .then(res => console.log(res.data));
    */

    const onChangeTitle = event => setTitle(event.target.title)
    const onChangeAuthor = event => setAuthor(event.target.author)
    const onChangeDescription = event => setDescription(event.target.description)
    const onChangeCategory = event => setCategory(event.target.category)
    const onChangeFlashcards = event => setFlashcards(event.target.flashcards)

    const handleClick = () => {
        if (flashcards) {
            setFlashcards(flashcardList.concat(flashcards))

            onChangeTitle('Submited')
        }
    }


    const submitHandler = e => {
        e.preventDefault()
    }

    

    


        


        return (
            <form onSubmit={submitHandler}>
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
                                onChange={onChangeTitle}
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
                                onChange={onChangeAuthor}
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
                                onChange={onChangeDescription}
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
                    Submit
                </button>
                
            </div>
            </form>
        )
    
}

export default FlashcardSet;