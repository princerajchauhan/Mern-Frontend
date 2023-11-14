import React from 'react'
import "./Experience.css"

const Experience = () => {
    return (
        <div className='exp-main'>
            <div className="exp-two-sides">
                <div className="exp-left-side">
                    <p className='exp-heading'>Are you an Experienced Professional willing to Switch?</p>
                    <div className="left-side-first-box left-side-box">
                        <img src="./images/experience/industry_vetted_curriculum.svg" alt="industry_vetted_curriculum" />
                        <p>INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
                    </div>
                    <div className="left-side-second-box left-side-box">
                        <img src="./images/experience/real_life_projects.svg" alt="real_life_projects" />
                        <p>REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
                    </div>
                    <div className="left-side-third-box left-side-box">
                        <img src="./images/experience/exclusive_placement.svg" alt="exclusive_placement" />
                        <p>EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
                    </div>
                    <p className='exp-left-down'>PrepBytes Elevation Academy<span> - 4 months Full Stack Program with Job Guarantee</span></p>
                    <button>Know More</button>
                </div>
                <div className="exp-right-side">
                    <p>Are you an Experienced Professional willing to Switch?</p>
                    <div>
                        <div className="right-side-left-img">
                            <img src="./images/experience/for_2020(1st+Image).svg" alt="for_2020" />
                        </div>
                        <div className="right-side-right-img">
                            <div className="right-side-top-img">
                                <img src="./images/experience/tools_for_2020.svg" alt="tools_for_2020" />
                            </div>
                            <div className="right-side-down-img">
                                <img src="./images/experience/for_2020_image_2.svg" alt="for_2020_image_2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience