import React from 'react'
import "./MentorClg.css"

const MentorCollege = () =>{
    return(
        <div className='mentor-college-main'>
            <p className="ment-clg-heading">PrepBytes for <span>Mentors & Colleges</span></p>
            <p>"Join PrepBytes in the journey to reach more colleges and mentor more students"</p>
            <div className="ment-clg-two-box">
                <div className="ment-clg-box">
                    <img src="./images/MentCollege/be_a_part_of_mentors.png" alt="be_a_part_of_mentors" />
                    <p>Be a part of growing Mentor Community of PrepBytes</p>
                    <p>We look forward to industry experts who have a passion for teaching, mentoring & making students future-ready</p>
                    <button>Know More</button>
                </div>
                <div className="ment-clg-box">
                    <img src="./images/MentCollege/futuristic_algo.png" alt="futuristic_algo" />
                    <p>Futuristic ALGO-driven Personalised learning module for your college</p>
                    <p>Every Student is different, hence their Learning should also be. Get in touch with to understand how PrepBytes can help students in your college</p>
                    <button>Know More</button>
                </div>
            </div>
        </div>
    )
}

export default MentorCollege