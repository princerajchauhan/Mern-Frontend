import React from 'react'
import "./College.css"

const College = () => {
    return (
        <div className='college-main'>
            <div className="college-bg-image">
                <img src="./images/College/CBM-WEB.webp" alt="CBM-WEB" />
                <div className="college-join">
                    <h3>Want to represent your College?</h3>
                    <p>Join <b style={{ color: '#00afec' }}>PrepBytes Campus Business Manager Internship program.</b></p>
                    <button className='join-btn'>Join Now</button>
                </div>
            </div>
        </div>
    )
}

export default College