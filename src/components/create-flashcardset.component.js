import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import FlashcardSet from './FlashcardSet.component';

import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import Flashcard from './flashcard.component';

export default class CreateFlashcardSet extends Component {

    

    render() {
        return (
            <div>
                <FlashcardSet>

                </FlashcardSet>
            </div>

                
        )
    }
}
