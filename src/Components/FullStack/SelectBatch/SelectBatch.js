import React, { useState } from 'react'
import "./SelectBatch.css"
import { useNavigate } from 'react-router-dom'
import { MakePayment } from '../../MakePayments/MakePayment'
import { toast } from 'react-toastify'

const SelectBatch = () => {
    const [batchSelect, setBatchSelect] = useState('')
    console.log(batchSelect)

    const navigate = useNavigate()

    const enrollFun = () => {
        if (JSON.parse(localStorage.getItem("prepbytes-user"))) {
            if (batchSelect === '') {
                toast("Please select the batch first", { theme: 'colored', type: 'warning' })
            }
            else
                MakePayment({ name: batchSelect, price: 30000 })
        }
        else {
            navigate("/login")
        }
    }

    return (
        <div className='full-select-batch'>
            <div className="full-batch-main">
                <h4>SELECT BATCH</h4>
                <div className="full-batch-mid">
                    <div>
                        <label>
                            <input type="radio" name='batchSelect' value="1st May Batch" onChange={e => setBatchSelect(e.target.value)} />
                            <div>
                                <h5>1st May</h5>
                                <p>Enrollment Started</p>
                            </div>
                        </label>
                        <label>
                            <input type="radio" name='batchSelect' value="15th May Batch" onChange={e => setBatchSelect(e.target.value)} />
                            <div>
                                <h5>15th May</h5>
                                <p>Enrollment Started</p>
                            </div>
                        </label>
                    </div>
                    <div className="full-batch-last">
                        <p>₹ 30000</p>
                        <div>
                            <div><button onClick={enrollFun}>Enroll Now</button></div>
                            <div><button>Try for free</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectBatch