import React, { Component } from 'react';
import "../App.css";
import EditFlashcardSet from './edit-flashcardset.component';

//A component to view but not edit a flashcard object.
export default class CreateFlashcardSet extends Component {

    

    render() {
        return (
            <div>
                <EditFlashcardSet>

                </EditFlashcardSet>
            </div>

                
        )
    }
}
