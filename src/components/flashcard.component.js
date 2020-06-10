import React, { useState, useEffect } from "react";
import CanvasDraw from "react-canvas-draw";
import "../App.css";

//A component that contains state information, and canvas to contain and give rich flashcard capabilities to the decks
const Flashcard = (counter) => {
  const [color, setColor] = useState("#ffc600");
  const [width, setWidth] = useState(550);
  const [height, setHeight] = useState(260);
  const [brushRadius, setBrushRadius] = useState(10);
  const [lazyRadius, setLazyRadius] = useState(2);
  const [editState, setEditState] = useState(false);
  const [frontFlashcard, setFrontFlashcard] = useState("");
  const [backFlashcard, setBackFlashcard] = useState("");
  const [flashcardArray, setFlashcardArray] = useState([frontFlashcard, backFlashcard])
  const [flashcardNum, setFlashcardNum] = useState(counter);

  var front = (
    <CanvasDraw
      brushColor={color}
      brushRadius={brushRadius}
      lazyRadius={lazyRadius}
      canvasWidth={width}
      canvasHeight={height}
      disabled={!editState}
      ref={(canvasDraw) => setFrontFlashcard(canvasDraw)}
    />
  );

  var back = (
    <CanvasDraw
      brushColor={color}
      brushRadius={brushRadius}
      lazyRadius={lazyRadius}
      canvasWidth={width}
      canvasHeight={height}
      disabled={!editState}
      ref={(canvasDraw) => setBackFlashcard(canvasDraw)}
    />
  );

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
    <div class="set-container">
      <div className="flashcard-container">
        {editState && (
          <div class="tools-container">
            <div class="brush-container">
              <div class="brush-group">
                <div class="toolbar-icon">Brush-Radius:</div>
                <input
                  class="toolbar-input"
                  type="number"
                  value={brushRadius}
                  onChange={(e) => setBrushRadius(e.target.value)}
                />
              </div>
              <div class="brush-group">
                <div class="toolbar-icon">Lazy-Radius:</div>
                <input
                  class="toolbar-input"
                  type="number"
                  value={lazyRadius}
                  onChange={(e) => setLazyRadius(e.target.value)}
                />
              </div>
            </div>

            <div class="text-container">Text</div>

            <div class="color-container">Color</div>

            <div class="background-container">
              <div class="background-group">
                <div class="toolbar-icon">Width:</div>
                <input
                  class="toolbar-input"
                  type="number"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div class="background-group">
                <div class="toolbar-icon">Height:</div>
                <input
                  class="toolbar-input"
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
            <div class="middle-swap">
              <button
                type="button"
                class="middle-button"
                onClick={() => setEditState(!editState)}
              >
                Edit
              </button>
            </div>
            <div class="middle-swap">
              <button
                type="button"
                class="middle-button"
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
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Flashcard;
