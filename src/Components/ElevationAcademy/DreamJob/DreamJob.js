import React, { useState } from 'react'
import './DreamJob.css'
import { DreamData } from './DreamData'

const DreamJob = () => {

    const [dreamleft] = useState([
        { id: 1, heading: "Application & Shortlisting" },
        { id: 2, heading: "Attend Free Webinar" },
        { id: 3, heading: "Batch Commencement" },
        { id: 4, heading: "7 Months Program" },
        { id: 5, heading: "Guaranteed Placement" },
    ])


    return (
        <div className='dream-job'>
            <div className="dream-job-heading">
                <h1>How will you reach to your dream Job?</h1>
            </div>
            <div className="dream-job-main">
                <div className="dream-job-left">
                    {
                        dreamleft.map(elem => (
                            <div className="dream-job-left-box" key={elem.id}>
                                <div>
                                    <span>{elem.id}</span>
                                    <span>{elem.heading}</span>
                                </div>
                                <div></div>
                            </div>
                        ))
                    }
                </div>
                <div className="dream-job-right">
                    {
                        DreamData && DreamData.map(item => (
                            <div className="dream-job-right-box" key={item.id}>
                                <div>
                                    <span>{item.desc}</span>
                                </div>
                                <div>
                                    <img src={item.photo} alt={item.desc.slice(10)} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default DreamJob