import React from 'react'
import "./FutureSkills.css"

const FutureSkills = () =>{
    return(
        <div className='future-skills'>
            <div className="future-skills-top">
                <div className="future-skills-left">
                    <p>Partner with</p>
                    <div className="future-skills-image">
                        <img src="./images/futureskills/header-logo.svg" alt="header-logo" />
                    </div>
                    <h1>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
                    <p>Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</p>
                    <div className="future-skills-btn">
                        <a href="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" target='_blank'  rel="noreferrer">
                            <button>Download</button>
                        </a>
                    </div>
                </div>
                <div className="future-skills-right">
                    <div className="future-right-box">
                        <p>Next Batch starts: 1st May, 2023</p>
                        <p>Limited seats available</p>
                    </div>
                    <div className="future-right-box">
                        <p>Program Duration: 4 - 5 months</p>
                        <p>15-20 hours/week</p>
                    </div>
                    <div className="future-right-box">
                        <p>Learning Format</p>
                        <p>Recorded Lectures + Online Live Classes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FutureSkills