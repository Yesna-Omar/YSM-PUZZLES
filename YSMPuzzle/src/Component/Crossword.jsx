// import React, { useState } from 'react';

// function Crossword() {
//     const [word, setWord] = useState('');
//     const [grids, setGrids] = useState([]);
  
//     const handleChange = (event) => {
//       if (event.key === 'Enter') {
//         const inputWord = word.replace(/[^a-zA-Z]/g, '').toUpperCase(); // Remove non-alphabetic characters and convert to uppercase
//         const newGrid = [];
//         for (let i = 0; i < inputWord.length; i++) {
//           newGrid.push(
//             <input
//               key={i}
//               className="crossword-box"
//               maxLength={1}
//               value={inputWord[i] || ''}
//               readOnly
//             />
//           );
//         }
//         setGrids([...grids, newGrid]); // Add the new grid to the array of grids
//         setWord('');
//       }
//     };
  
//     return (
//       <div>
//         <input
//           type="text"
//           value={word}
//           onChange={(event) => setWord(event.target.value)}
//           onKeyPress={handleChange}
//           placeholder="Enter a word and press Enter"
//         />
//         <div className="crossword-grids">
//           {grids.map((grid, index) => (
//             <div key={index} className="crossword-grid">
//               {grid}
//             </div>
//           ))}
//         </div>
//       </div>
//     );
// }

// export default Crossword;




// // import React, { useState } from 'react';

// // const Crossword = () => {
// //   // Define your puzzle data (e.g., clues and solution)
// //   const puzzleData = {
// //     across: [
// //       { number: 1, clue: 'Across clue 1', answer: 'ANSWER1' },
// //       { number: 4, clue: 'Across clue 2', answer: 'ANSWER2' },
// //       // Add more across clues as needed
// //     ],
// //     down: [
// //       { number: 1, clue: 'Down clue 1', answer: 'ANSWER3' },
// //       { number: 2, clue: 'Down clue 2', answer: 'ANSWER4' },
// //       // Add more down clues as needed
// //     ]
// //   };

// //   // Initialize state for user inputs
// //   const [grid, setGrid] = useState(Array(5).fill(Array(5).fill('')));

// //   // Function to handle user input
// //   const handleInputChange = (e, row, col) => {
// //     const newGrid = grid.map((r, rowIndex) =>
// //       r.map((cell, colIndex) =>
// //         rowIndex === row && colIndex === col ? e.target.value.toUpperCase() : cell
// //       )
// //     );
// //     setGrid(newGrid);
// //   };

// //   return (
// //     <div>
// //       <h1>Crossword Puzzle</h1>
// //       <div className="puzzle-container">
// //         <div className="grid">
// //           {grid.map((row, rowIndex) => (
// //             <div key={rowIndex} className="row">
// //               {row.map((cell, colIndex) => (
// //                 <input
// //                   key={colIndex}
// //                   type="text"
// //                   className="cell"
// //                   maxLength={1}
// //                   value={cell}
// //                   onChange={(e) => handleInputChange(e, rowIndex, colIndex)}
// //                 />
// //               ))}
// //             </div>
// //           ))}
// //         </div>
// //         <div className="clues">
// //           <h2>Across</h2>
// //           <ul>
// //             {puzzleData.across.map((clue, index) => (
// //               <li key={index}>
// //                 <strong>{clue.number}</strong> {clue.clue}
// //               </li>
// //             ))}
// //           </ul>
// //           <h2>Down</h2>
// //           <ul>
// //             {puzzleData.down.map((clue, index) => (
// //               <li key={index}>
// //                 <strong>{clue.number}</strong> {clue.clue}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Crossword;



// import React, { useState } from 'react';

// function CrosswordGenerator() {
//   const [rows, setRows] = useState([]);
//   const [columns, setColumns] = useState([]);
//   const [wordList, setWordList] = useState([]);
//   const [grid, setGrid] = useState([]);

//   const handleChangeRows = (event) => {
//     const rowCount = parseInt(event.target.value) || 0;
//     setRows(new Array(rowCount).fill(0));
//   };

//   const handleChangeColumns = (event) => {
//     const columnCount = parseInt(event.target.value) || 0;
//     setColumns(new Array(columnCount).fill(0));
//   };

//   const handleAddWord = (event) => {
//     event.preventDefault();
//     const wordInput = event.target.elements.word.value.toUpperCase();
//     setWordList([...wordList, wordInput]);
//     event.target.reset();
//   };

//   const generateGrid = () => {
//     const newGrid = rows.map(() => columns.map(() => ''));
//     wordList.forEach((word) => {
//       const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
//       const wordLength = word.length;
//       let x, y;
//       if (orientation === 'horizontal') {
//         x = Math.floor(Math.random() * (columns.length - wordLength + 1));
//         y = Math.floor(Math.random() * rows.length);
//       } else {
//         x = Math.floor(Math.random() * columns.length);
//         y = Math.floor(Math.random() * (rows.length - wordLength + 1));
//       }
//       for (let i = 0; i < wordLength; i++) {
//         if (orientation === 'horizontal') {
//           newGrid[y][x + i] = word[i];
//         } else {
//           newGrid[y + i][x] = word[i];
//         }
//       }
//     });
//     setGrid(newGrid);
//   };

//   return (
//     <div>
//       <h2>Crossword Generator</h2>
//       <form onSubmit={handleAddWord}>
//         <input type="text" name="word" placeholder="Enter a word" required />
//         <button type="submit">Add Word</button>
//       </form>
//       <label>
//         Rows:{' '}
//         <input type="number" min="1" onChange={handleChangeRows} />
//       </label>
//       <label>
//         Columns:{' '}
//         <input type="number" min="1" onChange={handleChangeColumns} />
//       </label>
//       <button onClick={generateGrid}>Generate Grid</button>
//       <div className="crossword-grid">
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="crossword-row">
//             {row.map((cell, columnIndex) => (
//               <div key={columnIndex} className="crossword-cell">
//                 {cell}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CrosswordGenerator;


// import React, { useState } from 'react';

// function CrosswordGenerator() {
//   const [wordList, setWordList] = useState([]);
//   const [grid, setGrid] = useState([]);

//   const handleAddWord = (event) => {
//     event.preventDefault();
//     const wordInput = event.target.elements.word.value.toUpperCase();
//     setWordList([...wordList, wordInput]);
//     event.target.reset();
//   };

//   const generateGrid = () => {
//     const maxLength = Math.max(...wordList.map(word => word.length));
//     const rows = new Array(maxLength).fill('');
//     const columns = new Array(maxLength).fill('');
//     const newGrid = rows.map(() => columns.map(() => ''));
//     wordList.forEach((word) => {
//       const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
//       const wordLength = word.length;
//       let x, y;
//       if (orientation === 'horizontal') {
//         x = Math.floor(Math.random() * (maxLength - wordLength + 1));
//         y = Math.floor(Math.random() * maxLength);
//       } else {
//         x = Math.floor(Math.random() * maxLength);
//         y = Math.floor(Math.random() * (maxLength - wordLength + 1));
//       }
//       for (let i = 0; i < wordLength; i++) {
//         if (orientation === 'horizontal') {
//           newGrid[y][x + i] = word[i];
//         } else {
//           newGrid[y + i][x] = word[i];
//         }
//       }
//     });
//     setGrid(newGrid);
//   };

//   return (
//     <div>
//       <h2>Crossword Generator</h2>
//       <form onSubmit={handleAddWord}>
//         <input type="text" name="word" placeholder="Enter a word" required />
//         <button type="submit">Add Word</button>
//       </form>
//       <button onClick={generateGrid}>Generate Grid</button>
//       <div className="crossword-grid">
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="crossword-row">
//             {row.map((cell, columnIndex) => (
//               <div key={columnIndex} className="crossword-cell">
//                 {cell}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CrosswordGenerator;




// import React, { useState } from 'react';

// function CrosswordGenerator() {
//   const [wordList, setWordList] = useState([]);
//   const [grid, setGrid] = useState([]);

//   const handleAddWord = (event) => {
//     event.preventDefault();
//     const wordInput = event.target.elements.word.value.toUpperCase();
//     setWordList([...wordList, wordInput]);
//     event.target.reset();
//   };

//   const generateGrid = () => {
//     const maxLength = Math.max(...wordList.map(word => word.length));
//     const newGrid = Array.from({ length: maxLength }, () => Array.from({ length: maxLength }, () => ''));
  
//     wordList.forEach((word) => {
//       let overlap = true;
//       while (overlap) {
//         const orientation = Math.random() > 0.5 ? 'horizontal' : 'vertical';
//         let x = Math.floor(Math.random() * (maxLength - (orientation === 'horizontal' ? word.length : 0)));
//         let y = Math.floor(Math.random() * (maxLength - (orientation === 'vertical' ? word.length : 0)));
  
//         overlap = false;
//         for (let i = 0; i < word.length; i++) {
//           if (orientation === 'horizontal') {
//             if (newGrid[y][x + i] !== '' && newGrid[y][x + i] !== word[i]) {
//               overlap = true;
//               break;
//             }
//           } else {
//             if (newGrid[y + i][x] !== '' && newGrid[y + i][x] !== word[i]) {
//               overlap = true;
//               break;
//             }
//           }
//         }
  
//         if (!overlap) {
//           for (let i = 0; i < word.length; i++) {
//             if (orientation === 'horizontal') {
//               newGrid[y][x + i] = word[i];
//             } else {
//               newGrid[y + i][x] = word[i];
//             }
//           }
//         }
//       }
//     });
//     setGrid(newGrid);
//   };
  

//   return (
//     <div>
//       <h2>Crossword Generator</h2>
//       <form onSubmit={handleAddWord}>
//         <input type="text" name="word" placeholder="Enter a word" required />
//         <button type="submit">Add Word</button>
//       </form>
//       <button onClick={generateGrid}>Generate Grid</button>
//       <div className="crossword-grid">
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="crossword-row">
//             {row.map((cell, columnIndex) => (
//               <div key={columnIndex} className="crossword-cell">
//                 {cell}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CrosswordGenerator;


// import React, { useState } from 'react';

// function CrosswordGenerator() {
//   const [wordList, setWordList] = useState([]);
//   const [grid, setGrid] = useState([]);

//   const handleAddWord = (event) => {
//     event.preventDefault();
//     const wordInput = event.target.elements.word.value.toUpperCase();
//     setWordList([...wordList, wordInput]);
//     event.target.reset();
//   };

//   const generateGrid = () => {
//     // Initialize the grid with spaces
//     const maxLength = 20; // Or adjust this to your desired grid size
//     const newGrid = Array.from({ length: maxLength }, () => Array.from({ length: maxLength }, () => ''));

//     // Helper function to check if a word fits at a particular position
//     const fitsAtPosition = (word, x, y, isHorizontal) => {
//       if (isHorizontal) {
//         if (x + word.length > maxLength) return false;
//         for (let i = 0; i < word.length; i++) {
//           if (newGrid[y][x + i] !== '' && newGrid[y][x + i] !== word[i]) return false;
//         }
//       } else {
//         if (y + word.length > maxLength) return false;
//         for (let i = 0; i < word.length; i++) {
//           if (newGrid[y + i][x] !== '' && newGrid[y + i][x] !== word[i]) return false;
//         }
//       }
//       return true;
//     };

//     // Helper function to add a word to the grid
//     const addWordToGrid = (word, x, y, isHorizontal) => {
//       if (isHorizontal) {
//         for (let i = 0; i < word.length; i++) {
//           newGrid[y][x + i] = word[i];
//         }
//       } else {
//         for (let i = 0; i < word.length; i++) {
//           newGrid[y + i][x] = word[i];
//         }
//       }
//     };

//     // Try to add each word to the grid
//     for (let i = 0; i < wordList.length; i++) {
//       const word = wordList[i];
//       let added = false;

//       // Try adding the word horizontally
//       for (let y = 0; y < maxLength; y++) {
//         for (let x = 0; x < maxLength; x++) {
//           if (fitsAtPosition(word, x, y, true)) {
//             addWordToGrid(word, x, y, true);
//             added = true;
//             break;
//           }
//         }
//         if (added) break;
//       }

//       // If word couldn't be added horizontally, try vertically
//       if (!added) {
//         for (let x = 0; x < maxLength; x++) {
//           for (let y = 0; y < maxLength; y++) {
//             if (fitsAtPosition(word, x, y, false)) {
//               addWordToGrid(word, x, y, false);
//               added = true;
//               break;
//             }
//           }
//           if (added) break;
//         }
//       }
//     }

//     // Update the grid state
//     setGrid(newGrid);
//   };

//   return (
//     <div>
//       <h2>Crossword Generator</h2>
//       <form onSubmit={handleAddWord}>
//         <input type="text" name="word" placeholder="Enter a word" required />
//         <button type="submit">Add Word</button>
//       </form>
//       <button onClick={generateGrid}>Generate Grid</button>
//       <div className="crossword-grid">
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="crossword-row">
//             {row.map((cell, columnIndex) => (
//               <div key={columnIndex} className="crossword-cell">
//                 {cell}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CrosswordGenerator;

// import React from 'react';

// import Crossword from '@jaredreisinger/react-crossword';

// const data = 
//   {
//     across: {
//       1: {
//         clue: 'one plus one',
//         answer: 'TWO',
//         row: 0,
//         col: 0,
//       },
//     },
//     down: {
//       2: {
//         clue: 'three minus two',
//         answer: 'ONE',
//         row: 0,
//         col: 2,
//       },
//     },
//   };

// export default function CrosswordGenerator() {
//   return <Crossword data={data} />;
// }