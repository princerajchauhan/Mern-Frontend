import React from 'react'
import "./Spinner.css"
import loading from "./Loading.webp"

const Spinner = () => {
    return (
        <div className='spinner-main'>
            <div>
                <img src={loading} alt="Loading" />
            </div>
        </div>
    )
}

export default Spinner