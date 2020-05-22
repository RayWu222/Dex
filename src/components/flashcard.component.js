import React, { Component } from 'react';
import axios from 'axios';
import CanvasDraw from "react-canvas-draw";
import "../App.css";


class Flashcard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Default Properties
      color: "#ffc600",
      width: 537,
      height: 298,
      brushRadius: 10,
      lazyRadius: 4
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
  
  console.log(`Form submitted:`);
  console.log(`FlashcardSet Title: ${this.state.flashcardSet_title}`);
  console.log(`FlashcardSet Author: ${this.state.flashcardSet_author}`);
  console.log(`FlashcardSet Description: ${this.state.flashcardSet_description}`);
  console.log(`FlashcardSet Category: ${this.state.flashcardSet_category}`);
  
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
  componentDidMount() {


  }

  render() {
    return (

      
      <div class="set-container">
                                            
      <div className="flashcard-container">
          <div class="tools-container">

              <div class="brush-container">
                  <div class="brush-group">
                      <div class="toolbar-icon">
                          Brush-Radius:
                      </div>
                      <input
                          class="toolbar-input"
                          type="number"
                          value={this.state.brushRadius}
                          onChange={e =>
                              this.setState({ brushRadius: parseInt(e.target.value, 10) })
                          }
                      />
                  </div>
                  <div class="brush-group">
                      <div class="toolbar-icon">
                          Lazy-Radius:
                      </div>
                      <input
                              class="toolbar-input"
                          type="number"
                          value={this.state.lazyRadius}
                          onChange={e =>
                              this.setState({ lazyRadius: parseInt(e.target.value, 10) })
                          }
                      />
                  </div>
              </div>

              <div class="text-container">
              
              </div>

              <div class="color-container">

              </div>

              <div class="background-container">
                  <div class="background-group">
                      <div class="toolbar-icon">Width:</div>
                          <input 
                              class="toolbar-input"
                              type="number"
                              value={this.state.width}
                              onChange={e =>
                              this.setState({ width: parseInt(e.target.value, 10) })
                              }
                          />
                  </div>
                  <div class="background-group">
                      <div class="toolbar-icon">
                          Height:
                      </div>
                      <input
                          class="toolbar-input"
                          type="number"
                          value={this.state.height}
                          onChange={e =>
                              this.setState({ height: parseInt(e.target.value, 10) })
                          }
                      />
                  </div>
              </div>

          </div>

          <div className="bottom-flashcard">
              <div className="left-flashcard">
              <CanvasDraw 
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
              />              
              </div>

              <div className="middle-flashcard">
                  <div class="middle-swap">
                      <button class="middle-button">
                          Swap
                      </button>
                  </div>
              </div>

              <div className="right-flashcard">
              <CanvasDraw 
                ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                brushColor={this.state.color}
                brushRadius={this.state.brushRadius}
                lazyRadius={this.state.lazyRadius}
                canvasWidth={this.state.width}
                canvasHeight={this.state.height}
              />  
              </div>
              
          </div>

          <div className="save-container">
              <button onClick={() => {this.loadableCanvas.loadSaveData(localStorage.getItem("savedDrawing") ); }}>
                  Load
              </button>  
              <button onClick={() => {localStorage.setItem("savedDrawing", this.saveableCanvas.getSaveData() ); }}>
                  Save
              </button>
              <button onClick={() => {this.saveableCanvas.clear();}}>
                  Clear
              </button>
              <button onClick={() => {this.saveableCanvas.undo();}}>
                  Undo
              </button>
          </div>

      </div>
          <div className="submitBar">
              <input type="submit" value="Create FlashcardSet" className="btn btn-primary"/>
          </div> 
      </div>
  
  
  
 
    )
  }
}

export default Flashcard;