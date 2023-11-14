import React from 'react'
import "./FreeWebinar.css"

const FreeWebinar = () => {
    return (
        <div className='free-webinar'>
            <div className='free-webinar-main'>
                <div className="free-webinar-left">
                    <div className="free-web-left-heading">
                        <p>Free Webinar</p>
                        <p>Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                    </div>
                    <div className="free-web-left-image">
                        <img src="./images/elevation/webinar/calendar.webp" alt="calendar" />
                    </div>
                </div>
                <div className="free-webinar-right">
                    <p>Free Webinar</p>
                    <p>Experts mentors designed to get you job-ready, designed for complete beginners as well.</p>
                    <div>
                        <p>17th April</p>
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </div>
            </div>

            <div className="free-webinar-down">
                <div className="webinar-down-main">
                    <div className="webinar-down-box">
                        <img src="./images/elevation/webinar/faculity-icon.svg" alt="faculity-icon" />
                        <div>
                            <p>100K+</p>
                            <p>Student Coding Community</p>
                        </div>
                    </div>
                    <div className="webinar-down-box">
                        <img src="./images/elevation/webinar/college-icon.svg" alt="college-icon" />
                        <div>
                            <p>800+</p>
                            <p>Colleges</p>
                        </div>
                    </div>
                    <div className="webinar-down-box">
                        <img src="./images/elevation/webinar/student-icon.svg" alt="student-icon" />
                        <div>
                            <p>100+</p>
                            <p>Students placed</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FreeWebinar