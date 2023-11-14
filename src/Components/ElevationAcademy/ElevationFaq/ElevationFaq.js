import React, { useState } from 'react'
import "./ElevationFaq.css"
import { FaMinus, FaPlus } from 'react-icons/fa6'
import data from './ElevationFaqData'

const ElevationFaq = () => {

    const [category, setCategory] = useState("criteria")
    const [show, setShow] = useState(0)

    return (
        <div className='elevation-faq'>
            <div className="elevation-faq-top">
                <p>Frequently Asked Questions</p>
            </div>

            <div className="elevation-faq-mid">
                <div onClick={() => setCategory("criteria")} className={category === "criteria" ? "elevation-faq-active" : 'elevation-faq-inactive'}>
                    <p>Eligibility Criteria</p>
                </div>
                <div onClick={() => setCategory("Enrolment")} className={category === "Enrolment" ? "elevation-faq-active" : 'elevation-faq-inactive'}>
                    <p>Batch Enrollment</p>
                </div>
                <div onClick={() => setCategory("Support")} className={category === "Support" ? "elevation-faq-active" : 'elevation-faq-inactive'}>
                    <p>Placement Support</p>
                </div>
            </div>

            <div className="elevation-faq-down">
                <div className="faq-down-inner">
                    {
                        data && data.filter(item => item.category === category).map(elem => (
                            <div className="faq-down-box" key={elem.id}>
                                {
                                    show === elem.id ?
                                        <button onClick={() => setShow(0)}>
                                            <p>{elem.heading}</p>
                                            <span><FaMinus /></span>
                                        </button> :
                                        <button onClick={() => setShow(elem.id)}>
                                            <p>{elem.heading}</p>
                                            <span><FaPlus /></span>
                                        </button>

                                }
                                {
                                    show === elem.id ?
                                        <div className="faq-down-data">
                                            <p>{elem.desc}</p>
                                        </div> : ''
                                }
                            </div>
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default ElevationFaq