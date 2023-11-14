import React, { useEffect } from "react"
import ReactPlayer from 'react-player'
import "./Videos.css"
import { useDispatch, useSelector } from "react-redux"
import { videoLinks } from "../../Features/VideoSlice"
import Spinner from "../../Spinner/Spinner"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"

const Videos = () => {

    const { isLoading, video } = useSelector(state => state.video)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        document.title = "Prepbytes Video Library"
        dispatch(videoLinks())
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>
                        <Navbar />
                        <div className="videos-main">
                            <div className="videos-top-desc">
                                <div className="videos-top-left">
                                    <h3>PrepBytes Video Library</h3>
                                    <p>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place.</p>
                                </div>
                                <div className="videos-top-right">
                                    <img src="./images/videos/video_lib_illustration.png" alt="video_lib_illustration" />
                                </div>
                            </div>

                            <div className="videos-categories-main">
                                <h3>CATEGORIES</h3>
                                <div className="videos-category">
                                    {
                                        isLoading ? <h2>Loading.....</h2> :
                                            video && video.map(elem => (
                                                <div className="videos-box" key={elem.id}>
                                                    <ReactPlayer url={elem.link} controls={true} width="100%" height="55%" style={{ borderRadius: '5px' }} />
                                                    <div className="video-desc">
                                                        <p>{elem.heading}</p>
                                                        <p>{elem.desc}</p>
                                                    </div>
                                                    <div className="video-icon">
                                                        <img src="./images/videos/video-icon.svg" alt="video-icon" />
                                                        <p>video</p>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </>
            }
        </>

    )
}

export default Videos