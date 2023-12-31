import React, { useEffect } from 'react'
import "./Competitive.css"
import FourLongoBox from '../../Components/Competitive/FourLongBox/FourLongBox'
import Guidance from '../../Components/Competitive/Guidance/Guidance'
import CompetProgram from '../../Components/Competitive/CompeteProgram/CompetProgram'
import CodingContest from '../../Components/Competitive/CodingContest/CodingContest'
import Curriculum from '../../Components/Competitive/Curriculum/Curriculum'
import CompetEnroll from '../../Components/Competitive/CompetEnroll/CompetEnroll'
import Mightbe from '../../Components/Competitive/MightBe/Mightbe'
import CompeteEnd from '../../Components/Competitive/CompeteEnd/CompeteEnd'
import { useDispatch, useSelector } from 'react-redux'
import { mightData } from '../../Features/MightSlice'
import Spinner from '../../Spinner/Spinner'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Competitive = () => {
    const { might, isLoading } = useSelector(state => state.might)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = "Placement Preparations for IT,Internet,Software & companies roles - Prepbytes.com"
        dispatch(mightData())
        //eslint-disable-next-line
    }, [])

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>
                        <Navbar />
                        <div className='compet-main'>
                            <div className="compet-top">
                                <div className="compet-top-left">
                                    <h3>MASTER COMPETITIVE PROGRAMMING</h3>
                                    <p>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <span>Under The Guidance Of Top Competitive Programmers</span></p>
                                    <button>Enroll Now</button>
                                </div>
                                <div className="compet-top-right">
                                    <img src="./images/Competitive/mcp-header-image.webp" alt="mcp-header" />
                                </div>

                            </div>

                            <FourLongoBox />
                            <Guidance />
                            <CompetProgram />
                            <CodingContest />
                            <Curriculum />
                            <CompetEnroll />
                            <Mightbe might={might} />
                            <CompeteEnd />

                        </div>
                        <Footer />
                    </>
            }

        </>
    )
}

export default Competitive