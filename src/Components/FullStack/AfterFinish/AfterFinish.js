import React from 'react'
import "./AfterFinish.css"

const AfterFinish = () => {
    return (
        <div className='after-finish'>
            <div className="after-finish-image">
                <img src="./images/futureskills/girlimage.webp" alt="girlimage" />
            </div>
            <div className="after-finish-content">
                <p>What you will be after finishing the program?</p>
                <div className="after-finish-all">
                    <div className="after-finish-box">
                        <div>
                            <img src="./images/futureskills/certificate.svg" alt="certificate" />
                        </div>
                        <p>Certified Full stack Developer</p>
                    </div>
                    <div className="after-finish-box">
                        <div>
                            <img src="./images/futureskills/realtime.svg" alt="realtime" />
                        </div>
                        <p>Experience of Real world work</p>
                    </div>
                    <div className="after-finish-box">
                        <div>
                            <img src="./images/futureskills/excellent.svg" alt="excellent" />
                        </div>
                        <p>Ready to crack any web developer interview</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AfterFinish