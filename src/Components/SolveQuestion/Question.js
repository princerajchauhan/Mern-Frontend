import React, { useState } from 'react'
import "./Question.css"

const Question = () => {
    const [ans, setAns] = useState('')
    const handleClick = () => {
        console.log(ans)
    }
    return (
        <div className='question-main'>
            <p>Can you solve these questions?</p>
            <div className="question-box">
                <p>Which of the following loops will execute the body of loop even when condition controlling the loop is initially false?</p>
                <div className="options">
                    <div>
                        <input type="radio" name='ans' value="do-while" onChange={e => setAns(e.target.value)} id='ans1' />
                        <label htmlFor="ans1">do-while</label>
                    </div>
                    <div>
                        <input type="radio" name='ans' value="while" onChange={e => setAns(e.target.value)} id='ans2' />
                        <label htmlFor="ans2">while</label>
                    </div>
                    <div>
                        <input type="radio" name='ans' value="for" onChange={e => setAns(e.target.value)} id='ans3' />
                        <label htmlFor="ans3">for</label>
                    </div>
                    <div>
                        <input type="radio" name='ans' value="none of the mentioned" onChange={e => setAns(e.target.value)} id='ans4' />
                        <label htmlFor="ans4">none of the mentioned</label>
                    </div>
                </div>
                <button onClick={handleClick}>Submit Answer</button>
            </div>
        </div>
    )
}

export default Question