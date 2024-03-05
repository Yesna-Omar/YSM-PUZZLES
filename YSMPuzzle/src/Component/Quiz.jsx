import React from "react";
import { useState } from 'react';

function Quiz() {

    const [inputs, setInputs] = useState({});
    const [questionAndAnswerList, setQuestionAndAnswerList] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setInputs(values => ({}));
        setQuestionAndAnswerList(values => values.concat(inputs));
        console.log(inputs);
        console.log(questionAndAnswerList);
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter Questions:
                    <input
                        type="text"
                        name="question"
                        value={inputs.question || ""}
                        onChange={handleChange}
                    />
                </label>
                <label>Enter Answers:
                    <input
                        type="text"
                        name="answer"
                        value={inputs.answer || ""}
                        onChange={handleChange}

                    />
                </label>
                <input type="submit" />
                <h2>Questions</h2>
                <ul>
                    {questionAndAnswerList.map((qaa) =>
                        <div key={qaa.question}><b>{qaa.question}</b>:{qaa.answer}</div>
                    )}
                </ul>

            </form>
        </div>
    )
}

export default Quiz;