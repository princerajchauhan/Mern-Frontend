import React from 'react'
import "./WhyPrepbytes.css"
import { WhyPbData } from './WhyPbData'

const WhyPrepbytes = () => {
    return (
        <div className='why-pb'>
            <div className="why-pb-heading">
                <p>Why PrepBytes Elevation Academy?</p>
            </div>
            <div className="why-pb-main">
                {
                    WhyPbData && WhyPbData.map(elem => (
                        <div className="why-pb-box" key={elem.id}>
                            <div className="why-pb-image">
                                <img src={elem.photo} alt={elem.heading} />
                            </div>
                            <div className="why-pb-desc">
                                <p>{elem.heading}</p>
                                <p>{elem.desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyPrepbytes