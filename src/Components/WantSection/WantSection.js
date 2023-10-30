import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import "./Want.css"

const WantSection = () => {
    return (
        <div className='want-main'>
            <p>I WANT TO</p>
            <div className="three-want">
                <div className="want-one">
                    <div className="back-img">
                        <img src="./images/want/bg_prepare_for_campus.webp" alt="bg_prepare_for_campus" />
                    </div>
                    <div className="want-one-main want1">
                        <img src="./images/want/prepare_for_campus.webp" alt="prepare_for_campus" />
                        <p>PREPARE FOR CAMPUS PLACEMENTS</p>
                        <button className='want-arrow' ><FaArrowRight/></button>
                    </div>
                </div>

                <div className="want-one">
                    <div className="back-img">
                        <img src="./images/want/bg_master_competetive.webp" alt="bg_master_competetive" />
                    </div>
                    <div className="want-one-main want2">
                        <img src="./images/want/master_competetive_pgm.webp" alt="master_competetive_pgm" />
                        <p>MASTER COMPETITIVE PROGRAMMING</p>
                        <button className='want-arrow' ><FaArrowRight/></button>
                    </div>
                </div>

                <div className="want-one">
                    <div className="back-img">
                        <img src="./images/want/bg_learn_full_mern.webp" alt="bg_learn_full_mern" />
                    </div>
                    <div className="want-one-main want3">
                        <img src="./images/want/learn_full_stack.webp" alt="learn_full_stack" />
                        <p>BUILD DEVELOPMENT PROJECTS</p>
                        <button className='want-arrow' ><FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WantSection