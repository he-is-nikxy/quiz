import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
    return (
        <>
            <div>
                <h1>Set up your Quiz</h1>
                <form>
                    <input type="text" placeholder='Enter your name' />
                    <select name="category" id="category">
                        <option value="">Select Category</option>
                        <option value="generalKnowledge">General Knowledge</option>
                        <option value="sports">Sports</option>
                        <option value="geography">Geography</option>
                    </select>
                    <select name="level" id="level">
                        <option value="">Select Difficulty</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                    <input type="number" placeholder='Choose number of questions' />
                    <Link to={"/quizQuestions"} ><button >Start Quiz</button></Link>
                    
                </form>
            </div>
        </>
    )
}

export default Quiz