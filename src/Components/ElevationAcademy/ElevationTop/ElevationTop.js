import React from "react";
import "./ElevationTop.css"

const ElevationTop = () => {
    return (
        <div className="elevation-top">
            <section>
                <div className="elevation-top-left">
                    <h1>PrepBytes Elevation Academy - Full Stack Web Development Career</h1>
                    <p>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
                    <ul>
                        <li>
                            <img src="./images/elevation/top/arrow.svg" alt="arrow" />
                            <p>Complete Live Class from experts</p>
                        </li>
                        <li>
                            <img src="./images/elevation/top/arrow.svg" alt="arrow" />
                            <p>Be the best Full stack developer</p>
                        </li>
                        <li>
                            <img src="./images/elevation/top/arrow.svg" alt="arrow" />
                            <p>Job Guarantee</p>
                        </li>
                    </ul>
                    <div className="elevation-top-btn">
                        <button>Apply Now</button>
                        <button>Get a call back</button>
                    </div>
                </div>
                <div className="elevation-top-right">
                    <img src="./images/elevation/top/ISA-masthead-mern-5.webp" alt="ISA-masthead-mern-5" />
                </div>
            </section>
        </div>
    )
}

export default ElevationTop