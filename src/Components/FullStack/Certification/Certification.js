import React from 'react'
import "./Certification.css"


const Certification = () => {
    return (
        <div className='certification'>

            <div className="certification-left">
                <p>Get a real time project</p>
                <div className="certification-down">
                    <div>
                        <img src="./images/certificate/real.svg" alt="real" />
                        <p>Get a real time project</p>
                    </div>
                    <div>
                        <img src="./images/certificate/experience.svg" alt="experience" />
                        <p>Experience agile methodology & Work with industry experts</p>
                    </div>
                    <div>
                        <img src="./images/certificate/deploy.svg" alt="deploy" />
                        <p>Deploy your project to Production</p>
                    </div>
                </div>
            </div>

            <div className="certification-right">
                <p>Certification</p>
                <p>Joint Co-Branded Participation Certificate & Partner Completion Certificate</p>
                <div>
                    <img src="./images/certificate/nasscom-certificate-full-satck-mern.png" alt="nasscom-certificate-full-satck-mern" />
                </div>
            </div>

        </div>
    )
}

export default Certification