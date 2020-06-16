import React, { useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import "../App.css";

const front = () => (
  <CanvasDraw
    brushColor={'#ffc600'}
    brushRadius={10}
    lazyRadius={2}
    canvasWidth={550}
    canvasHeight={260}
    disabled={false}
    saveData={''}
  />
);

var back = () => (
  <CanvasDraw
    brushColor={'#ffc600'}
    brushRadius={10}
    lazyRadius={2}
    canvasWidth={550}
    canvasHeight={260}
    disabled={false}
    saveData={''}
  />
);

//A component that contains state information, and canvas to contain and give rich flashcard capabilities to the decks
const Flashcard = (counter) => {
  const [color, setColor] = useState("");
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [brushRadius, setBrushRadius] = useState(10);
  const [lazyRadius, setLazyRadius] = useState(2);
  const [editState, setEditState] = useState();
  const [frontFlashcard, setFrontFlashcard] = useState(front);
  const [backFlashcard, setBackFlashcard] = useState(back);
  const [flashcardNum] = useState(counter);


  
  // useEffect(() => {
  //   setFlashcard([front, back])
  // }, []);

  const resetFrontFlashcard = () => {
    frontFlashcard.loadSaveData(
      localStorage.getItem("frontFlashcard" + flashcardNum)
    );
  }

  const resetBackFlashcard = () => {
    backFlashcard.loadSaveData(
      localStorage.getItem("backFlashcard" + flashcardNum)
    );
  }
  
  const swapFlashcard = () => {
    var frontData = frontFlashcard.getSaveData();
    localStorage.setItem(
      "frontFlashcard" + flashcardNum,
      backFlashcard.getSaveData()
    );
    localStorage.setItem("backFlashcard" + flashcardNum, frontData);

    frontFlashcard.loadSaveData(
      localStorage.getItem("frontFlashcard" + flashcardNum)
    );
    backFlashcard.loadSaveData(
      localStorage.getItem("backFlashcard" + flashcardNum)
    );
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

            <div className="text-container">Text</div>

            <div className="color-container">
            <div className="brush-group">
                <div className="toolbar-icon">Color:</div>
                <input
                  className="toolbar-input"
                  type="string"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
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
          <div className="left-flashcard">{front}</div>

          <div className="middle-flashcard">
            <div className="middle-swap">
              <button
                type="button"
                className="middle-button"
                onClick={() => setEditState(!editState)}
              >
                Edit
              </button>
            </div>
            <div className="middle-swap">
              <button
                type="button"
                className="middle-button"
                onClick={() => swapFlashcard()}
              >
                Swap
              </button>
            </div>
          </div>
          <div className="right-flashcard">{back}</div>
        </div>
      

      {editState && (
        <div className="save-container">
          <div className="left-save">
            <button
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
          </div>
          <div className="right-save">
            <button
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
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Flashcard;
