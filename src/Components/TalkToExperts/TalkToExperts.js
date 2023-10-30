import React, { useState } from 'react'
import "./TalkToExperts.css"

const TalkToExperts = () => {
    const [value, setValue] = useState({
        Name: '',
        Email: '',
        Phone: '',
        Query: ''
    })

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const clickHandle = () => {
        console.log(value)
    }

    return (
        <div className='experts-main'>
            <div className="experts-box">
                <div className="experts-images-side">
                    <p className="experts-heading">Talk to our experts</p>
                    <p>Still Confused how PrepBytes can help you achieve your dream? Talk to our experts</p>
                    <div className="experts-img">
                        <img src="./images/experts/call_back.svg" alt="call_back" />
                    </div>
                </div>
                <div className="experts-form-side">
                    <form>
                        <input type="text" name='Name' value={value.Name} onChange={handleChange} placeholder='Name' />
                        <input type="email" name='Email' value={value.Email} onChange={handleChange} placeholder='Email' />
                        <input type="number" name='Phone' value={value.Phone} onChange={handleChange} placeholder='Phone' />
                        <textarea name="Query" id="" cols="30" rows="10" placeholder='Query'></textarea>
                        <button onClick={clickHandle}>Request a call back</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TalkToExperts