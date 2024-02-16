import React, { useState } from 'react';

function Crossword() {
    const [word, setWord] = useState('');
    const [grids, setGrids] = useState([]);
  
    const handleChange = (event) => {
      if (event.key === 'Enter') {
        const inputWord = word.replace(/[^a-zA-Z]/g, '').toUpperCase(); // Remove non-alphabetic characters and convert to uppercase
        const newGrid = [];
        for (let i = 0; i < inputWord.length; i++) {
          newGrid.push(
            <input
              key={i}
              className="crossword-box"
              maxLength={1}
              value={inputWord[i] || ''}
              readOnly
            />
          );
        }
        setGrids([...grids, newGrid]); // Add the new grid to the array of grids
        setWord('');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          onKeyPress={handleChange}
          placeholder="Enter a word and press Enter"
        />
        <div className="crossword-grids">
          {grids.map((grid, index) => (
            <div key={index} className="crossword-grid">
              {grid}
            </div>
          ))}
        </div>
      </div>
    );
}

export default Crossword;
