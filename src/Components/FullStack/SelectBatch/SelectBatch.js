import React, { useState } from 'react'
import "./SelectBatch.css"

const SelectBatch = () => {
    const [batchSelect, setBatchSelect] = useState()
    console.log(batchSelect)
    return (
        <div className='full-select-batch'>
            <div className="full-batch-main">
                <h4>SELECT BATCH</h4>
                <div className="full-batch-mid">
                    <label>
                        <input type="radio" name='batchSelect' value="1st" onChange={e => setBatchSelect(e.target.value)} />
                        <div>
                            <h5>1st May</h5>
                            <p>Enrollment Started</p>
                        </div>
                    </label>
                    <label>
                        <input type="radio" name='batchSelect' value="1st" onChange={e => setBatchSelect(e.target.value)} />
                        <div>
                            <h5>15th May</h5>
                            <p>Enrollment Started</p>
                        </div>
                    </label>
                    <div className="full-batch-last">
                        <p>₹ 30000</p>
                        <div>
                            <button>Enroll Now</button>
                            <button>Try for free</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectBatch