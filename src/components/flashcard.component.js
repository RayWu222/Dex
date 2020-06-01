import React, { useState, useEffect } from 'react';
import CanvasDraw from "react-canvas-draw";
import "../App.css";



const Flashcard = () => {
      const [color, setColor] = useState('#ffc600');
      const [width, setWidth] = useState(500);
      const [height, setHeight] = useState(250);
      const [brushRadius, setBrushRadius] = useState(10);
      const [lazyRadius, setLazyRadius] = useState(2);
      const [editState, setEditState] = useState(false);

    var front = <CanvasDraw 
        brushColor={color}
        brushRadius={brushRadius}
        lazyRadius={lazyRadius}
        canvasWidth={width}
        canvasHeight={height} 
        disabled={!editState}
        />
    var back = <CanvasDraw 
        brushColor={color}
        brushRadius={brushRadius}
        lazyRadius={lazyRadius}
        canvasWidth={width}
        canvasHeight={height} 
        disabled={true} 
        />

    const swapFlashcard = () => {
        var temp = {front};
        front = {back};
        back = {temp};
        alert('Swapped');
    }

    return (  
        <div class="set-container">
                                                
            <div className="flashcard-container">
                {editState && <div class="tools-container">

                    <div class="brush-container">
                        <div class="brush-group">
                            <div class="toolbar-icon">
                                Brush-Radius:
                            </div>
                            <input
                                class="toolbar-input"
                                type="number"
                                value={brushRadius}
                                onChange={e =>
                                    setBrushRadius(e.target.value)
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
                                value={lazyRadius}
                                onChange={e =>
                                    setLazyRadius(e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div class="text-container">
                        Text
                    </div>

                    <div class="color-container">
                        Color
                    </div>

                    <div class="background-container">
                        <div class="background-group">
                            <div class="toolbar-icon">Width:</div>
                                <input 
                                    class="toolbar-input"
                                    type="number"
                                    value={width}
                                    onChange={e =>
                                        setWidth(e.target.value)
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
                                value={height}
                                onChange={e =>
                                    setHeight(e.target.value)
                                }
                            />
                        </div>
                    </div>
                </div>}

                <div className="bottom-flashcard">
                    <div className="left-flashcard">
                    {front}            
                    </div>

                <div className="middle-flashcard">
                    <div class="middle-swap">
                        <button type="button" class="middle-button" onClick={swapFlashcard}>
                            Swap
                        </button>
                        <button type="button" class="middle-button" onClick={() => setEditState(!editState)}>Edit</button>
                    </div>
                </div>

                <div className="right-flashcard">
                {back}
                </div>
            </div>

            {editState && 
            <div className="save-container">
                <button type="button" onClick={}>
                    Clear
                </button>
                <button type="button" onClick={}> 
                    Undo
                </button>
                </div>
            }
            </div>
            

        </div>
    )
}// line 179 undo
// line 453 clear


export default Flashcard;