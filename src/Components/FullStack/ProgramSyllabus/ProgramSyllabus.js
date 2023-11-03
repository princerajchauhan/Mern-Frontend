import React, { useContext, useState } from 'react'
import "./ProgramSyllabus.css"
import ProgramContext from './ProgramContext'

const ProgramSyllabus = () => {
    const [showHide0, setShowHide0] = useState(false)
    const [showHide1, setShowHide1] = useState(false)
    const [showHide2, setShowHide2] = useState(false)
    const [showHide3, setShowHide3] = useState(false)
    const [showHide4, setShowHide4] = useState(false)
    const [showHide5, setShowHide5] = useState(false)
    const [showHide6, setShowHide6] = useState(false)
    const data = useContext(ProgramContext)
    return (
        <div className='program-syllabus'>
            <div className="prog-syllabus-heading">
                <div>
                    <p>Program Syllabus & Projects</p>
                    <a href="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/full-stack/PrepBytes+Full+Stack+Development+MERN+Certification+Program.pdf" target='_blank' rel='noreferrer'>
                        <button>Download Syllabus</button>
                    </a>
                </div>
                <p>We have reverse engineered our syllabus by talking to the best companies and understanding what skills the industry needs the most right now.</p>
            </div>

            {
                data && <>
                    <div className="prog-syllabus-box">
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{data[0].heading}</p>
                                <p>Week {data[0].week}</p>
                            </div>
                            <p>{data[0].desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{ background: showHide0 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                            <p style={{ color: showHide0 ? "white" : "" }}>Course Content</p>
                            {
                                showHide0 ? <button onClick={() => setShowHide0(!showHide0)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setShowHide0(!showHide0)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{ maxHeight: showHide0 ? '580px' : '0px', padding: showHide0 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                            <ul>
                                {
                                    data[0].course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="prog-syllabus-box">
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{data[1].heading}</p>
                                <p>Week {data[1].week}</p>
                            </div>
                            <p>{data[1].desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{ background: showHide1 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                            <p style={{ color: showHide1 ? "white" : "" }}>Course Content</p>
                            {
                                showHide1 ? <button onClick={() => setShowHide1(!showHide1)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setShowHide1(!showHide1)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{ maxHeight: showHide1 ? '580px' : '0px', padding: showHide1 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                            <ul>
                                {
                                    data[1].course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="prog-syllabus-box">
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{data[2].heading}</p>
                                <p>Week {data[2].week}</p>
                            </div>
                            <p>{data[2].desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{ background: showHide2 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                            <p style={{ color: showHide2 ? "white" : "" }}>Course Content</p>
                            {
                                showHide2 ? <button onClick={() => setShowHide2(!showHide2)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setShowHide2(!showHide2)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{ maxHeight: showHide2 ? '580px' : '0px', padding: showHide2 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                            <ul>
                                {
                                    data[2].course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="prog-syllabus-box">
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{data[3].heading}</p>
                                <p>Week {data[3].week}</p>
                            </div>
                            <p>{data[3].desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{ background: showHide3 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                            <p style={{ color: showHide3 ? "white" : "" }}>Course Content</p>
                            {
                                showHide3 ? <button onClick={() => setShowHide3(!showHide3)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setShowHide3(!showHide3)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{ maxHeight: showHide3 ? '580px' : '0px', padding: showHide3 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                            <ul>
                                {
                                    data[3].course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="prog-syllabus-box">
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{data[4].heading}</p>
                                <p>Week {data[4].week}</p>
                            </div>
                            <p>{data[4].desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{ background: showHide4 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                            <p style={{ color: showHide4 ? "white" : "" }}>Course Content</p>
                            {
                                showHide4 ? <button onClick={() => setShowHide4(!showHide4)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setShowHide4(!showHide4)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{ maxHeight: showHide4 ? '580px' : '0px', padding: showHide4 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                            <ul>
                                {
                                    data[4].course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className="prog-syllabus-box">
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{data[5].heading}</p>
                                <p>Week {data[5].week}</p>
                            </div>
                            <p>{data[5].desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{ background: showHide5 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                            <p style={{ color: showHide5 ? "white" : "" }}>Course Content</p>
                            {
                                showHide5 ? <button onClick={() => setShowHide5(!showHide5)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setShowHide5(!showHide5)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{ maxHeight: showHide5 ? '580px' : '0px', padding: showHide5 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                            <ul>
                                {
                                    data[5].course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </>
            }

            <div className="prog-syllabus-box">
                <div className="prog-syllabus-top">
                    <div>
                        <p>Projects</p>
                        <p>Week 3-16</p>
                    </div>
                    <p>You will build 6+ projects during the whole program. Starting from building basic apps to bring your learning to the application, to building a real-world website that you can add in your resume or start your own business, you will do it all. The projects are carefully chosen by software developers for you.</p>
                </div>
                <div className="prog-syllabus-mid" style={{ background: showHide6 ? "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : "" }}>
                    <p style={{ color: showHide6 ? "white" : "" }}>Course Content</p>
                    {
                        showHide6 ? <button onClick={() => setShowHide6(!showHide6)} className='hide-btn'>Hide</button> :
                            <button onClick={() => setShowHide6(!showHide6)} className='show-btn'>View Details</button>
                    }
                </div>

                <div className="prog-syllabus-last pro-syllabus-project" style={{ maxHeight: showHide6 ? '3000px' : '0px', padding: showHide6 ? '21px 44px 21px 17px' : '0px 44px 0 17px' }}>
                    <div>
                        <div>
                            <div>
                                <img src="./images/project/HTML_HTML.svg" alt="HTML_HTML" />
                            </div>
                            <p>HTML Blog Page</p>
                            <p>Start your web development by making a simple blog page using HTML.</p>
                        </div>

                        <div>
                            <div>
                                <img src="./images/project/Clock.svg" alt="Clock" />
                            </div>
                            <p>Reminder Clock App</p>
                            <p>Want to build an app to keep your reminders? Build your own Digital Reminder Clock App using HTML, CSS and JS</p>
                        </div>
                        <div>
                            <div>
                                <img src="./images/project/app_todo.svg" alt="app_todo" />
                            </div>
                            <p>ToDo App</p>
                            <p>This will be a basic project to make your understanding of HTML and CSS clear but you can use it to keep your ToDos as well.</p>
                        </div>
                        <div>
                            <div>
                                <img src="./images/project/app_blog.svg" alt="app_blog" />
                            </div>
                            <p>React Blog App</p>
                            <p>Create your own Medium website. Through the project you will understand how React , Node and MongoDB work together to create magic.</p>
                        </div>
                        <div>
                            <div>
                                <img src="./images/project/app_shopping.svg" alt="app_shopping" />
                            </div>
                            <p>E-commerce Web App</p>
                            <p>This will be one of the major projects of the program. It will be a full-fledged working website. Just add some products and you will be ready to sell online and take payments.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProgramSyllabus