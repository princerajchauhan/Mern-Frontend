import React from 'react'
import "./IndustryGrowth.css"

const IndustryGrowth = () => {
    return (
        <div className='industry-growth'>
            <div className="industry-growth-left">
                <p>Industry Growth</p>
                <div className="industry-left-main">
                    <div>
                        <img src="./images/hirecomp/growth.svg" alt="growth" />
                        <div>
                            <p>30% Annual Growth</p>
                            <p>for Full-Stack Developer jobs by 2020.</p>
                        </div>
                    </div>
                    <div>
                        <img src="./images/hirecomp/newJobs.svg" alt="newJobs" />
                        <div>
                            <p>Over 1 million new jobs</p>
                            <p>Full-Stack Developer profile will be created by 2020 (Source: NASSCOM)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="industry-growth-right">
                <p>Annual Salary</p>
                <div>
                    <img src="./images/hirecomp/graph.svg" alt="graph" />
                </div>
                <p>Source: <span>Glassdoor</span></p>
            </div>
        </div>
    )
}

export default IndustryGrowth