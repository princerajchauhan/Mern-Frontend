import React from 'react'
import "./Founder.css"

const Founder = () => {
    return (
        <div className='founder-main'>
            <div className="top-founder">
                <div className="top-founder-left">
                    <img src="./images/founder/know_details_back.svg" alt="know_details_back" />
                    <div className="top-founder-main">
                        <div className="top-founder-img">
                            <img src="./images/founder/mamta_mentor.png" alt="mamta_mentor" />
                        </div>
                        <h2>Mamta Kumari</h2>
                        <p>Co-Founder PrepBytes</p>
                        <div className="founder-company">
                            <img src="./images/founder/Amazon+sam.png" alt="Amazon+sam" />
                        </div>
                    </div>
                </div>
                <div className="top-founder-right">
                    <h2>Attend Free sessions with industry experts and get valuable guidance</h2>
                    <p>How to master competitive coding?</p>
                    <button>Know More</button>
                    <p className='top-border'>How to crack coding interviews?</p>
                    <button>Know More</button>
                </div>
            </div>
            <div className="four-details">
                <div className="four-details-box">
                    <img src="./images/fourDetails/100k_coding.svg" alt="100k_coding" />
                    <p>100K+</p>
                    <p>Coding Community</p>
                </div>
                <div className="four-details-box">
                    <img src="./images/fourDetails/1000+_hours_pf.svg" alt="1000+_hours_pf" />
                    <p>1000+</p>
                    <p>Hours of Live Session</p>
                </div>
                <div className="four-details-box">
                    <img src="./images/fourDetails/10000_hours_learning.svg" alt="10000_hours_learning" />
                    <p>10000+</p>
                    <p>Hours of Learning</p>
                </div>
                <div className="four-details-box">
                    <img src="./images/fourDetails/doubts_solved.svg" alt="doubts_solved" />
                    <p>700K+</p>
                    <p>Doubts Solved</p>
                </div>
            </div>
        </div>
    )
}

export default Founder