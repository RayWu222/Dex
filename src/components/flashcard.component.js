import React, { useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import "../App.css";

// const front = () => (
//   <CanvasDraw
//     brushColor={'#ffc600'}
//     brushRadius={10}
//     lazyRadius={2}
//     canvasWidth={550}
//     canvasHeight={260}
//     disabled={false}
//     saveData={''}
//   />
// );

// var back = () => (
//   <CanvasDraw
//     brushColor={'#ffc600'}
//     brushRadius={10}
//     lazyRadius={2}
//     canvasWidth={550}
//     canvasHeight={260}
//     disabled={false}
//     saveData={''}
//   />
// );

//A component that contains state information, and canvas to contain and give rich flashcard capabilities to the decks
const Flashcard = (counter) => {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [brushRadius, setBrushRadius] = useState("");
  const [lazyRadius, setLazyRadius] = useState("");
  const [editState, setEditState] = useState("");
  const [frontFlashcard, setFrontFlashcard] = useState("");
  const [backFlashcard, setBackFlashcard] = useState("");
  const [flashcardNum] = useState(counter);


  
  // useEffect(() => {
  //   setFlashcard([front, back])
  // }, []);

  const resetFrontFlashcard = () => {
  //   frontFlashcard.loadSaveData(
  //     localStorage.getItem("frontFlashcard" + flashcardNum)
  //   );
  }

  const resetBackFlashcard = () => {
  //   backFlashcard.loadSaveData(
  //     localStorage.getItem("backFlashcard" + flashcardNum)
  //   );
  }
  
  const swapFlashcard = () => {
  //   var frontData = frontFlashcard.getSaveData();
  //   localStorage.setItem(
  //     "frontFlashcard" + flashcardNum,
  //     backFlashcard.getSaveData()
  //   );
  //   localStorage.setItem("backFlashcard" + flashcardNum, frontData);

  //   frontFlashcard.loadSaveData(
  //     localStorage.getItem("frontFlashcard" + flashcardNum)
  //   );
  //   backFlashcard.loadSaveData(
  //     localStorage.getItem("backFlashcard" + flashcardNum)
  //   );
  };

  return (
    <div className="set-container">
      <div className="flashcard-container">
        {editState && (
          <div className="tools-container">
            <div className="brush-container">
              <div className="brush-group">
                <div className="toolbar-icon">Brush-Radius:</div>
                <input
                  className="toolbar-input"
                  type="number"
                  value={brushRadius}
                  onChange={(e) => setBrushRadius(e.target.value)}
                />
              </div>
              <div className="brush-group">
                <div className="toolbar-icon">Lazy-Radius:</div>
                <input
                  className="toolbar-input"
                  type="number"
                  value={lazyRadius}
                  onChange={(e) => setLazyRadius(e.target.value)}
                />
              </div>
            </div>

            <div class="text-container">
              <div class="toolbar-icon">Text:</div>
              <input
                  class="toolbar-input"
                  type="number"
                  value={''}
                  onChange={(e) => setColor(e.target.value)}
                />
            </div>

            <div class="color-container">
              <div class="toolbar-icon">Color:</div>
              <input
                  class="toolbar-input"
                  type="number"
                  value={''}
                  onChange={(e) => setColor(e.target.value)}
                />
            </div>

            <div className="background-container">
              <div className="background-group">
                <div className="toolbar-icon">Width:</div>
                <input
                  className="toolbar-input"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div className="background-group">
                <div className="toolbar-icon">Height:</div>
                <input
                  className="toolbar-input"
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        <div className="bottom-flashcard">
          <div className="left-flashcard">
              <input
                className="toolbar-input"
                type="string"
                onChange={(e) => setFrontFlashcard(e.target.value)}
              />
            </div>

          <div className="middle-flashcard">
            <div className="middle-swap">
              <button
                type="button"
                className="search-submit-button"
                onClick={() => setEditState(!editState)}
              >
                Edit
              </button>
            </div>
            <div className="middle-swap">
              <button
                type="button"
                className="search-submit-button"
                onClick={() => swapFlashcard()}
              >
                Swap
              </button>
            </div>
          </div>
          <div className="right-flashcard">
                <input
                className="toolbar-input"
                type="string"
                onChange={(e) => setBackFlashcard(e.target.value)}
              />
            </div>
        </div>
      

      {editState && (
        <div className="save-container">
          <div className="left-save">
            <button
              className="search-submit-button"
              type="button"
              onClick={() => {
                localStorage.setItem(
                  "frontFlashcard" + flashcardNum,
                  frontFlashcard.getSaveData()
                );
              }}
            >
              Save
            </button>
            <button
              className="search-submit-button"
              type="button"
              onClick={() => {
                frontFlashcard.clear();
              }}
            >
              Clear
            </button>
            <button
                type="button"
                className="middle-button"
                onClick={() => resetFrontFlashcard()}
              >
                Reset
              </button>
              <button
              className="search-submit-button"
              type="button"
              onClick={() => {
                frontFlashcard.loadSaveData(
                  localStorage.getItem("frontFlashcard" + flashcardNum)
                );
              }}
            >
              Load
            </button>
          </div>
          <div className="right-save">
            <button
              className="search-submit-button"
              type="button"
              onClick={() => {
                localStorage.setItem(
                  "backFlashcard" + flashcardNum,
                  backFlashcard.getSaveData()
                );
              }}
            >
              Save
            </button>
            <button
              className="search-submit-button"
              type="button"
              onClick={() => {
                backFlashcard.clear();
              }}
            >
              Clear
            </button>
            <button
                type="button"
                className="middle-button"
                onClick={() => resetBackFlashcard()}
              >
                Reset
              </button>
              <button
              className="search-submit-button"
              type="button"
              onClick={() => {
                backFlashcard.loadSaveData(
                  localStorage.getItem("backFlashcard" + flashcardNum)
                );
              }}
            >
              Load
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Flashcard;
