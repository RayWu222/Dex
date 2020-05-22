import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import Flashcard from './flashcard.component';

import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";

export default class FlashcardSet extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          flashcardSet_title: '',
          flashcardSet_author: '',
          flashcardSet_description: '',
          flashcardSet_category: ''
      }
    }

    onChangeFlashcardSetTitle(e) {
        this.setState({
            flashcardSet_title: e.target.value
        });
      }
      
      onChangeFlashcardSetAuthor(e) {
        this.setState({
            flashcardSet_author: e.target.value
        });
      }
      
      onChangeFlashcardSetDescription(e) {
        this.setState({
            flashcardSet_description: e.target.value
        });
      }
      
      onChangeFlashcardSetCategory(e) {
        this.setState({
            flashcardSet_category: e.target.value
        });
      }
      
      onChangeFlashcardSetFlashcard(e) {
        this.setState({
            flashcardSet_flaschard: e.target.value
        });
      }
      
      onSubmit(e) {
        e.preventDefault();
        
        const newFlashcardSet = {
            flashcardSet_title: this.state.flashcardSet_title,
            flashcardSet_author: this.state.flashcardSet_author,
            flashcardSet_description: this.state.flashcardSet_description,
            flashcardSet_category: this.state.flashcardSet_category
        };
      
        axios.post('http://localhost:4000/flashcardSet/add', newFlashcardSet)
            .then(res => console.log(res.data));
      
        this.setState({
            flashcardSet_title: '',
            flashcardSet_author: '',
            flashcardSet_description: '',
            flashcardSet_category: ''
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
                                value={this.state.flashcardSet_title}
                                onChange={this.onChangeFlashcardSetTitle}
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
                                value={this.state.flashcardSet_author}
                                onChange={this.onChangeFlashcardSetAuthor}
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
                                value={this.state.flashcardSet_description}
                                onChange={this.onChangeFlashcardSetDescription}
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
                                    checked={this.state.flashcardSet_category==='Math'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Math</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="categoryOptions" 
                                    id="categoryScience" 
                                    value="Science" 
                                    checked={this.state.flashcardSet_category==='Science'} 
                                    onChange={this.onChangeFlashcardSetCategory}
                                    />
                            <label className="form-check-label">Science</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio"
                                    name="categoryOptions" 
                                    id="categoryEnglish" 
                                    value="English" 
                                    checked={this.state.flashcardSet_category==='English'} 
                                    onChange={this.onChangeFlashcardSetCategory}
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
