import React from 'react'
import "./Journey.css"

const Journey = () =>{
    return(
        <div className='journey'>
            <div className="journey-heading">
                <p>How will your journey look like?</p>
                <p>We have designed a unique program where you can learn Full stack & experience being a developer sitting at your home</p>
            </div>
            <div className="journey-main">
                <div className="journey-left">

                    <div className="journey-all-box">
                        <div className="journey-box">
                            <div className="journey-number">1</div>
                            <div className="journey-box-content joruney-content1">Batch Commencement</div>
                        </div>
                        <div className="journey-box">
                            <div className="journey-number">2</div>
                            <div className="journey-box-content">Learn required languages, framework & tools</div>
                        </div>
                        <div className="journey-box">
                            <div className="journey-number">3</div>
                            <div className="journey-box-content">Complete awesome real world projects</div>
                        </div>
                        <div className="journey-box">
                            <div className="journey-number">4</div>
                            <div className="journey-box-content">Experience the complete development lifecycle</div>
                        </div>
                        <div className="journey-box">
                            <div className="journey-number">5</div>
                            <div className="journey-box-content">Be a certified Full Stack Developer</div>
                        </div>
                    </div>

                </div>

                <div className="journey-right">
                    <div className="journey-right-main">
                        <div className="journey-right-head">
                            <p>Batch Commencement</p>
                        </div>
                        <div className="journey-right-content">
                            <ul>
                                <li>Get access to dashboard & complete plan</li>
                                <li>Introduction with lead mentor for this program</li>
                                <li>Access to recorded video lectures</li>
                                <li>Access to Mock Tests</li>
                                <li>One live session with mentors per week</li>
                                <li>Every live session will be of 2 hours duration</li>
                            </ul>
                        </div>
                        <div className="journey-right-image">
                            <img src="./images/futureskills/works_batchcommencement.svg" alt="works_batchcommencement" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Journey