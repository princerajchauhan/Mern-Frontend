import React from 'react'
import "./Application.css"

const Application = () => {
    return (
        <div className='application'>
            <div className='application-main'>
                <div className="application-top">
                    <p>How can you be part of the next batch</p>
                    <p>Experts mentors designed to get you job-ready, designed for complete beginners as well. All this with absolute zero cost including real-time assignments that help you practice what you have learnt. for complete beginners as well.</p>
                </div>
                <div className="application-down">
                    <div className="application-down-left">
                        <div>
                            <img src="./images/elevation/application/registeration-icon.webp" alt="registeration-icon" />
                            <p>Application</p>
                        </div>
                        <div>
                            <img src="./images/elevation/application/qualification.webp" alt="qualification" />
                            <p>Shortlisting</p>
                        </div>
                        <div>
                            <img src="./images/elevation/application/qualification.webp" alt="qualification" />
                            <p>Free Webinars</p>
                        </div>
                        <div>
                            <img src="./images/elevation/application/payment-icon.webp" alt="payment-icon" />
                            <p>Enrollment</p>
                        </div>
                        <div>
                            <img src="./images/elevation/application/start-batch-icon.webp" alt="start-batch-icon" />
                            <p>Batch Commencement</p>
                        </div>
                    </div>
                    <div className="application-down-right">
                        <div>
                            <div className="application-down-right-heading">
                                <p>Application</p>
                            </div>
                            <div className="application-down-right-details">
                                <ul>
                                    <li>
                                        <img src="./images/elevation/application/check.svg" alt="check" />
                                        <p>We are inviting applications for 2023, 2022 & 2021 passouts.</p>
                                    </li>
                                    <li>
                                        <img src="./images/elevation/application/check.svg" alt="check" />
                                        <p>Apply for the next batch by filling up the application form.</p>
                                    </li>
                                    <li>
                                        <img src="./images/elevation/application/check.svg" alt="check" />
                                        <p>Fill all the information correctly.</p>
                                    </li>
                                    <li>
                                        <img src="./images/elevation/application/check.svg" alt="check" />
                                        <p>Any false information will lead to disqualification.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Application