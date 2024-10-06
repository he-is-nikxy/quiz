import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const QuizQuestions = () => {

    const [questions, setQuestions] = useState([])

    const getQuestions = async () => {
        let res = await fetch("https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple");
        let data = await res.json();
        console.log(data.results);
        setQuestions(data.results);
    }

    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <>
            {
                questions.map((e, index) => {
                    return (
                        <div key={index}>

                            <div>
                                {index + 1}. <span> {e.question} </span>
                                <br />
                                <input type="radio" name={`question${index}`} value="true" />
                                {e.correct_answer}
                                <input type="radio" name={`question${index}`} value="true" />
                                {e.incorrect_answers[0]}
                                <input type="radio" name={`question${index}`} value="true" />
                                {e.incorrect_answers[1]}
                                <input type="radio" name={`question${index}`} value="true" />
                                {e.incorrect_answers[2]}
                                <br />
                            </div>

                        </div>
                    )
                })
            }
            <Link to={"/leaderboard"} >
                <button>Submit</button>
            </Link>
        </>
    )
}

export default QuizQuestions