import React, { useState } from 'react'
import "./GetTouch.css"

const GetTouch = () => {

    const [valid, setValid] = useState(false)

    const [value, setValue] = useState({
        email: '',
        phone: ''
    })

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const clickHandle = () => {
        if (value.email === '' || value.phone === '') {
            setValid(true)
        }
        else {
            setValid(false)
        }
    }

    return (
        <div className='get-touch'>
            <section>
                <div className="get-touch-form">
                    <div className="get-touch-left">
                        <div>
                            <img src="./images/certificate/clock.svg" alt="clock" />
                            <p>Course Duration</p>
                            <p>80 hours</p>
                        </div>
                        <div>
                            <img src="./images/certificate/level.svg" alt="level" />
                            <p>Level</p>
                            <p>Beginners & Intermediate</p>
                        </div>
                    </div>
                    <div className="get-touch-right">
                        <p>Not sure? Talk to our advisors</p>
                        <div>
                            <div className="get-right-top">
                                <div>
                                    <label htmlFor="email">Email *</label>
                                    <input type="text" name="email" id="email" value={value.email} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone no. *</label>
                                    <input type="number" name="phone" id="phone" value={value.phone} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="get-right-btn">
                                <button onClick={clickHandle}>Get In Touch</button>
                                {valid && <p>One or more required fields is missing or invalid</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GetTouch