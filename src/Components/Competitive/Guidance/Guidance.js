import React from 'react'
import "./Guidance.css"

const Guidance = () => {
    return (
        <div className='guidance-main'>
            <p>Get Guidance From Industry Leading Mentors</p>
            <div className="guidance-top">
                <p>Other Mentors You Will Be Interacting With</p>
                <div className="guidance-three-top">

                    <div className="guidance-top-box">
                        <div className="guidance-image">
                            <img src="./images/guidance/Mentor_Mamta.webp" alt="Mentor_Mamta" />
                        </div>
                        <div className="guidance-desc">
                            <p>Mamta</p>
                            <p>Co-Founder, PrepBytes</p>
                            <img src="./images/guidance/Mentor-Company1.webp" alt="Mentor-Company1" />
                        </div>
                    </div>
                    <div className="guidance-top-box">
                        <div className="guidance-image">
                            <img src="./images/guidance/Mentor_Kushdeep.webp" alt="Mentor_Kushdeep" />
                        </div>
                        <div className="guidance-desc">
                            <p>Kushdeep</p>
                            <p>SDE, ShareChat</p>
                            <img src="./images/guidance/logo-01.webp" alt="logo-01" />
                        </div>
                    </div>
                    <div className="guidance-top-box">
                        <div className="guidance-image">
                            <img src="./images/guidance/Mentor_Aveek.webp" alt="Mentor_Aveek" />
                        </div>
                        <div className="guidance-desc">
                            <p>Aveek</p>
                            <p>Mentor, PrepBytes</p>
                            <img src="./images/guidance/logo-02.webp" alt="logo-02" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Guidance