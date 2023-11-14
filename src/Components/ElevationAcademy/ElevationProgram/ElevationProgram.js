import React, { useContext, useState } from 'react'
import "./ElevationProgram.css"
import ProgramData from './ProgramData'
import { FaPlus , FaMinus } from "react-icons/fa6"

const ElevationProgram = () => {

    const data = useContext(ProgramData)
    const [value, setValue] = useState(0)

    return (
        <div className='elevation-pro'>
            <div className="elevation-pro-heading">
                <div>
                    <p>Program Syllabus</p>
                </div>
                <p>Learn from the best and be prepared to crack full stack developer jobs</p>
            </div>

            {
                data && data.map(elem => (
                    <div className="elevation-pro-box" key={elem.id}>
                        <div className="elevation-pro-top">
                            <p>{elem.week}</p>
                        </div>
                        <div className="elevation-pro-mid">
                            <div>
                                <div className="elevation-mid-name">
                                    <div className="elevation-mid-name-top">
                                        <div>
                                            <p>{elem.id}</p>
                                        </div>
                                        <p>{elem.heading}</p>
                                    </div>
                                    {
                                      value === elem.id?  <p onClick={() => setValue(0)}><FaMinus /></p>:
                                      <p onClick={() => setValue(elem.id)}><FaPlus /></p>
                                    }
                                </div>
                                <div className="elevation-mid-data" style={{maxHeight:value === elem.id?"516px": "0px"}}>
                                    <div className="elevation-mid-data-main">
                                        <div className="elevation-mid-data-inner">
                                            <p>{elem.desc}</p>
                                            <ul>
                                                {
                                                    elem.course.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ElevationProgram