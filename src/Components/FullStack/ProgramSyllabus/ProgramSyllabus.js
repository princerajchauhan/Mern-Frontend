import React, { useContext, useState } from 'react'
import "./ProgramSyllabus.css"
import ProgramContext from './ProgramContext'
import ProjectData from './ProgramProject'

const ProgramSyllabus = () => {
    const [value, setValue] = useState(0)
    const [showHide6, setShowHide6] = useState(false)
    const data = useContext(ProgramContext)
    const project = useContext(ProjectData)
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
                data && data.map(elem => (
                    <div className="prog-syllabus-box" key={elem.id}>
                        <div className="prog-syllabus-top">
                            <div>
                                <p>{elem.heading}</p>
                                <p>Week {elem.week}</p>
                            </div>
                            <p>{elem.desc}</p>
                        </div>
                        <div className="prog-syllabus-mid" style={{
                            background: value === elem.id ?
                                "linear-gradient(89deg, rgba(45, 111, 162, .8862745098039215), rgba(2, 9, 14, .9294117647058824))" : ""
                        }}>
                            <p style={{ color: value === elem.id ? "white" : "" }}>Course Content</p>
                            {
                                value === elem.id ? <button onClick={() => setValue(0)} className='hide-btn'>Hide</button> :
                                    <button onClick={() => setValue(elem.id)} className='show-btn'>View Details</button>
                            }
                        </div>
                        <div className="prog-syllabus-last" style={{
                            maxHeight: value === elem.id ? '580px' : '0px',
                            padding: value === elem.id ? '21px 44px 21px 17px' : '0px 44px 0 17px'
                        }}>
                            <ul>
                                {
                                    elem.course.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
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
                        {
                            project && project.map(elem => (
                                <div key={elem.id}>
                                    <div>
                                        <img src={elem.photo} alt={elem.heading} />
                                    </div>
                                    <p>{elem.heading}</p>
                                    <p>{elem.desc}</p>
                                </div>
                            ))
                        }
{/* 
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
                        </div> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ProgramSyllabus