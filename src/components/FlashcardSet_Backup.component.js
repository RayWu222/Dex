import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import Flashcard from './flashcard.component';

const FlashcardSet = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [flashcard, setFlashcard] = useState('');

    // re-rendering in response to some kind of change, such as state change, API requests, etc.

      onSubmit(e) {
        e.preventDefault();
        
        const newFlashcardSet = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description,
            category: this.state.category,
            flashcard: this.state.flashcard
        };
      
        axios.post('http://localhost:4000/flashcardSet/add', newFlashcardSet)
            .then(res => console.log(res.data));
      
        this.setState({
            title: '',
            author: '',
            description: '',
            category: '',
            flashcard: ''
        })
      }

    render() {
        return (
            
            <div class="title-container">
                <div class="title-name">
                    <h3>Create New Flashcard Set</h3>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <div class="form-title"> 
                            <label>Title: </label>
                        </div>
                        <div class="form-input">
                            <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChangeTitle}
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
                                value={this.state.author}
                                onChange={this.onChangeAuthor}
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
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryMath" 
                                    value="Math"
                                    checked={this.state.category==='Math'} 
                                    onChange={this.onChangeCategory}
                                    />
                            <label className="form-check-label">Math</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryScience" 
                                    value="Science" 
                                    checked={this.state.category==='Science'} 
                                    onChange={this.onChangeCategory}
                                    />
                            <label className="form-check-label">Science</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio"
                                    name="categoryOptions" 
                                    id="categoryEnglish" 
                                    value="English" 
                                    checked={this.state.category==='English'} 
                                    onChange={this.onChangeCategory}
                                    />
                            <label className="form-check-label">English</label>
                        </div>
                    </div>
                </form>

                <Flashcard />
            </div>
        )
    }
}
