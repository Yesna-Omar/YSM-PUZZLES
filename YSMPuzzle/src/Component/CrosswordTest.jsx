// import React from "react";
// import { useState } from 'react';

// import Crossword from '@jaredreisinger/react-crossword';

// function CrosswordTest() {

//     const [inputs, setInputs] = useState({});
//     const [data, setData] = useState({});
//     const [questionAndAnswerList, setQuestionAndAnswerList] = useState([]);

//     const handleChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         setInputs(values => ({ ...values, [name]: value }));
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setInputs(values => ({}));
//         setQuestionAndAnswerList(values => values.concat(inputs));
//         console.log(inputs);
//         console.log(questionAndAnswerList);
        
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Enter Questions:
//                     <input
//                         type="text"
//                         name="question"
//                         value={inputs.question || ""}
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>Enter Answers:
//                     <input
//                         type="text"
//                         name="answer"
//                         value={inputs.answer || ""}
//                         onChange={handleChange}

//                     />
//                 </label>
//                 <input type="submit" />
//                 <h2>Questions</h2>
//                 <ul>
//                     {questionAndAnswerList.map((qaa) =>
//                         <div key={qaa.question}><b>{qaa.question}</b>:{qaa.answer}</div>
//                     )}
//                 </ul>

//             </form>
//             <Crossword data={data} />
//         </div>
//     )
// }

// export default CrosswordTest;

// import React, { useState } from "react";
// import Crossword from '@jaredreisinger/react-crossword';

// function CrosswordTest() {
//     const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);

//     const handleChange = (event) => {
//         const { name, value } = event.target;
//         setQuestionsAndAnswers(prev => [...prev, { [name]: value }]);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         event.target.reset(); // Reset the form
//     };

//     const crosswordData = {
//            across: {
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
//     };

//     questionsAndAnswers.forEach((qaa, index) => {
//         const { question, answer } = qaa;
//         if (question && answer) {
//             crosswordData.across.push({ clue: `${index + 1}. ${question}`, answer });
//             // Optionally, you might want to add entries for 'down' as well
//         }
//     });

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Enter Question:
//                     <input
//                         type="text"
//                         name="question"
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <label>Enter Answer:
//                     <input
//                         type="text"
//                         name="answer"
//                         onChange={handleChange}
//                     />
//                 </label>
//                 <button type="submit">Add Question</button>
//             </form>
//             <h2>Questions</h2>
//             <ul>
//                 {questionsAndAnswers.map((qaa, index) => (
//                     <li key={index}><b>{qaa.question}</b>: {qaa.answer}</li>
//                 ))}
//             </ul>
//             <Crossword data={crosswordData} />
//         </div>
//     );
// }

// export default CrosswordTest;

import React, { useState } from 'react';
import Crossword from '@jaredreisinger/react-crossword';

export default function CrosswordTest() {
  const [crosswordData, setCrosswordData] = useState({
    across: {},
    down: {},
  });

  const [formData, setFormData] = useState({ clue: '', answer: '', row: '', col: '' });

  // Initialize clue ID counter and array to track deleted IDs
  const [clueIdCounter, setClueIdCounter] = useState(1);
  const [deletedClueIds, setDeletedClueIds] = useState([]);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addClue = () => {
    const { clue, answer, row, col } = formData;

    // Ensure clue, answer, row, and col are not empty
    if (clue.trim() === '' || answer.trim() === '' || row === '' || col === '') {
      return;
    }

    let newClueId;

    // If there are deleted IDs, reuse the first one
    if (deletedClueIds.length > 0) {
      newClueId = deletedClueIds.shift();
    } else {
      newClueId = clueIdCounter;
      setClueIdCounter(clueIdCounter + 1); // Increment the clue ID counter
    }

    // Convert row and col to integers
    const rowIndex = parseInt(row, 10);
    const colIndex = parseInt(col, 10);

    // Determine whether to add the clue to across or down
    const direction = Math.random() < 0.5 ? 'across' : 'down';

    // Check for overlapping letters in existing clues
    const existingClues = crosswordData[direction];
    for (const existingClueId in existingClues) {
      const existingClueData = existingClues[existingClueId];
      if (
        (direction === 'across' && existingClueData.row === rowIndex) ||
        (direction === 'down' && existingClueData.col === colIndex)
      ) {
        const existingAnswer = existingClueData.answer;
        const commonLetters = getCommonLetters(existingAnswer, answer);
        if (commonLetters.length > 0) {
          return;
        }
      }
    }

    // Additional rules for position of answers
    for (const existingClueId in crosswordData[direction]) {
      const existingClueData = crosswordData[direction][existingClueId];
      if (direction === 'across' && existingClueData.row === rowIndex) {
        const existingColStart = existingClueData.col;
        const existingColEnd = existingColStart + existingClueData.answer.length - 1;
        if ((colIndex >= existingColStart && colIndex <= existingColEnd) ||
            (colIndex + answer.length - 1 >= existingColStart && colIndex + answer.length - 1 <= existingColEnd)) {
          return;
        }
      } else if (direction === 'down' && existingClueData.col === colIndex) {
        const existingRowStart = existingClueData.row;
        const existingRowEnd = existingRowStart + existingClueData.answer.length - 1;
        if ((rowIndex >= existingRowStart && rowIndex <= existingRowEnd) ||
            (rowIndex + answer.length - 1 >= existingRowStart && rowIndex + answer.length - 1 <= existingRowEnd)) {
          return;
        }
      }
    }

    // Add the new clue to the crossword data with the incremented clue ID
    const newCrosswordData = {
      ...crosswordData,
      [direction]: {
        ...crosswordData[direction],
        [newClueId]: {
          clue: clue,
          answer: answer.toUpperCase(),
          row: rowIndex,
          col: colIndex,
        },
      },
    };

    setCrosswordData(newCrosswordData);
    setFormData({ clue: '', answer: '', row: '', col: '' }); // Clear the form fields after adding clue
  };

  const removeClue = (direction, clueId) => {
    // Remove the clue from the crossword data
    const updatedCrosswordData = { ...crosswordData };
    delete updatedCrosswordData[direction][clueId];
    setCrosswordData(updatedCrosswordData);

    // Add the deleted ID to the array of deleted IDs
    setDeletedClueIds([...deletedClueIds, parseInt(clueId)]);
  };

  const getCommonLetters = (str1, str2) => {
    return str1.split('').filter(char => str2.includes(char));
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); addClue(); }}>
        <label>
          Clue:
          <input type="text" name="clue" value={formData.clue} onChange={handleFormChange} />
        </label>
        <label>
          Answer:
          <input type="text" name="answer" value={formData.answer} onChange={handleFormChange} />
        </label>
        <label>
          Row:
          <input type="number" name="row" value={formData.row} onChange={handleFormChange} />
        </label>
        <label>
          Column:
          <input type="number" name="col" value={formData.col} onChange={handleFormChange} />
        </label>
        <button type="submit">Add Clue</button>
      </form>
      <div>
        <h2>Generated Clues</h2>
        {Object.entries(crosswordData).map(([direction, clues]) => (
          <div key={direction}>
            <h3>{direction.toUpperCase()}</h3>
            <ul>
              {Object.entries(clues).map(([clueId, clueData]) => (
                <li key={clueId}>
                  {clueData.clue} - {clueData.answer} - ({clueData.row}, {clueData.col})
                  <button onClick={() => removeClue(direction, clueId)}>Remove</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ width: '100em', display: 'flex' }}>
        <Crossword data={crosswordData} />
      </div>
    </div>
  );
}










