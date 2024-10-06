import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <div>
                <h1>Welcome to the Quiz Competition</h1>
                <h2>Test your knowledge by participating in the quiz!</h2>
                <Link to={"/quiz"} > <button>Start Quiz</button> </Link>
            </div>
        </>
    )
}

export default Home