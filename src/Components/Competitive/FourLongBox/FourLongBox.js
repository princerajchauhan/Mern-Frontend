import React from 'react'
import "./FourLongBox.css"

const FourLongoBox = () => {
    return (
        <div className='four-long-main'>
            <div className="four-long-all-box">
                <div className="four-long-box">
                    <div>
                        <img src="./images/Competitive/mcp-usp-one.webp" alt="mcp-usp-one" />
                    </div>
                    <p>9 months intensive bootcamp</p>
                </div>
                <div className="four-long-box">
                    <div>
                        <img src="./images/Competitive/mcp-usp-two.webp" alt="mcp-usp-two" />
                    </div>
                    <p>Quick doubt resolution</p>
                </div>
                <div className="four-long-box">
                    <div>
                        <img src="./images/Competitive/mcp-usp-three.webp" alt="mcp-usp-three" />
                    </div>
                    <p>Live coding sessions with top-rated coders</p>
                </div>
                <div className="four-long-box">
                    <div>
                        <img src="./images/Competitive/mcp-usp-four.webp" alt="mcp-usp-four" />
                    </div>
                    <p>Get certificate on course completion</p>
                </div>
            </div>
        </div>
    )
}

export default FourLongoBox