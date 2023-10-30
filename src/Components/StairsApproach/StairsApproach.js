import React from 'react'
import "./Approach.css"

const StairsApproach = () => {
    return (
        <div className='stairs-main'>
            <div className="stairs-img-side">
                <img src="./images/stairs/stairs_of_approach.svg" alt="stairs_of_approach" />
            </div>
            <div className="stairs-side">
                <p>How PrepBytes Mentorship driven Personalised Learning works?</p>
                <div className="all-approach">
                    <div className='approch-main stairs-one'>
                        <div className="approach stairs-one-right">
                            <div>
                                <p>PERSONALISED LECTURES & WEEKLY PLAN</p>
                                <div>
                                    <img src="./images/stairs/personalised_learning.svg" alt="personalised learning" />
                                    <p>Get learning videos & weekly plan based on your coding skills</p>
                                </div>
                            </div>
                        </div>
                        <div className="stairs-one-left">
                            <img src="./images/stairs/right-arrow.svg" alt="right-arrow" />
                        </div>
                    </div>

                    <div className='approch-main stairs-two'>
                        <div className="approach stairs-two-right">
                            <div>
                                <p>PERSONALISED CODING ASSIGNMENTS</p>
                                <div>
                                    <img src="./images/stairs/code_live_with_experts.svg" alt="personalised learning" />
                                    <p>Practice coding questions that adapts based on your progress</p>
                                </div>
                            </div>
                        </div>
                        <div className="stairs-two-left">
                            <img src="./images/stairs/left-arrow.svg" alt="left-arrow" />
                        </div>
                    </div>

                    <div className='approch-main stairs-three'>
                        <div className="approach stairs-three-right">
                            <div>
                                <p>DOUBT SOLVING BY CODING EXPERTS</p>
                                <div>
                                    <img src="./images/stairs/ask_doubts_totally_live.svg" alt="personalised learning" />
                                    <p>Getting Stuck While Coding? Get all your doubts resolved.</p>
                                </div>
                            </div>
                        </div>
                        <div className="stairs-three-left">
                            <img src="./images/stairs/right-arrow.svg" alt="right-arrow" />
                        </div>
                    </div>

                    <div className='approch-main stairs-four'>
                        <div className="approach stairs-four-right">
                            <div>
                                <p>CODE LIVE WITH TOP CODERS</p>
                                <div>
                                    <img src="./images/stairs/personalised_practice.svg" alt="personalised learning" />
                                    <p>Topic wise Live Coding sessions with top rated coders</p>
                                </div>
                            </div>
                        </div>
                        <div className="stairs-four-left">
                            <img src="./images/stairs/left-arrow.svg" alt="left-arrow" />
                        </div>
                    </div>

                    <div className='approch-main stairs-four'>
                        <img src="./images/stairs/achieve_your_coding_dream.svg" alt="achieve_your_coding_dream" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StairsApproach