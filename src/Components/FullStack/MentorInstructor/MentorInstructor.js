import React from 'react'
import "./MentorInstructor.css"

const MentorInstructor = () =>{
    return(
        <div className='mentor-instructor'>
            <div className="mentor-inst-top">
                <p>Mentors & Instructors</p>
                <div className="mentor-inst-all">

                    <div className="mentor-inst-box">
                        <div className="mentor-inst-image">
                            <img src="./images/mentorinstructor/Mamta.webp" alt="Mamta" />
                        </div>
                        <p>Mamta Kumari, Co-Founder PrepBytes</p>
                        <p>Mamta has over 5 years of experience working in tech giants like Amazon and Samsung and has mentored more than 2000 students to help them enhance their coding skills. She is all set to guide you in your journey of web development</p>
                    </div>

                    <div className="mentor-inst-box">
                        <div className="mentor-inst-image">
                            <img src="./images/mentorinstructor/mentor_rahul.webp" alt="mentor_rahul" />
                        </div>
                        <p>Rahul Dutta, Software Developer OLA</p>
                        <p>Rahul has work experience of over 3 years and is currently working as Software Developer in OLA. Rahul has mentored many students in past and is excited about sharing his knowledge here.</p>
                    </div>

                    <div className="mentor-inst-box">
                        <div className="mentor-inst-image">
                            <img src="./images/mentorinstructor/mentor_harshita.webp" alt="mentor_harshita" />
                        </div>
                        <p>Harshita Sharma, Product Engineer AskSid.ai</p>
                        <p>Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MentorInstructor