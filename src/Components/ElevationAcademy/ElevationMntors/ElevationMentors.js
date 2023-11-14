import React from 'react'
import "./ElevationMentors.css"
import data from './ElevationMentData'

const ElevationMentors = () => {
    return (
        <div className='elevation-mentors'>
            <p>Our Mentors</p>
            <p>Learn directly from experienced software developers and master full stack</p>
            <div className="elevation-mentors-main">
                {
                    data && data.map(elem => (
                        <div className="elevation-mentors-box" key={elem.id}>
                            <div className="elevation-ment-top">
                                <div className="elevation-ment-bg">
                                    <img src={elem.bgImg} alt={elem.name} />
                                </div>
                                <div className="elevation-ment-image">
                                    <img src={elem.photo} alt={elem.name} />
                                </div>
                            </div>
                            <div className="elevation-ment-heading">
                                <p>{elem.name}</p>
                                <p>{elem.role}</p>
                            </div>
                            <div className="elevation-ment-desc"><p>{elem.desc}</p></div>
                            <div className="elevation-ment-company">
                                <img src={elem.company} alt={elem.name} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ElevationMentors