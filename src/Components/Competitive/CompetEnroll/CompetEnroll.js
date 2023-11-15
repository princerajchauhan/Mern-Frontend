import React, { useState } from 'react'
import "./CompetEnroll.css"
import { useNavigate } from 'react-router-dom'
import { MakePayment } from '../../MakePayments/MakePayment'

const CompetEnroll = () => {
    const [addclass, setAddClass] = useState(true)
    const navigate = useNavigate()
    return (
        <div className='compet-enroll'>
            <div className="compet-enroll-main">
                <p>SELECT BATCH</p>
                <div className="compet-enroll-mid">
                    <div className={addclass ? 'compet-enroll-active' : ''} onClick={() => setAddClass(!addclass)}>
                        <h5>1st May</h5>
                        <p>Enrollment Started</p>
                    </div>
                    <div className={addclass ? '' : 'compet-enroll-active'} onClick={() => setAddClass(!addclass)}>
                        <h5>15th May</h5>
                        <p>Enrollment Started</p>
                    </div>
                </div>
                <div className="compet-enroll-last">
                    <h5>₹ 25000</h5>
                    {
                        JSON.parse(localStorage.getItem("prepbytes-user")) ?
                        <button onClick={() => MakePayment({name: "Enrollment", price: 25000})}>Enroll Now</button>:
                        <button onClick={() => navigate('/login')}>Enroll Now</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default CompetEnroll