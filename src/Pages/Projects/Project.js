import React, { useEffect, useState } from 'react'
import "./Project.css"
import { Link, useLocation, useParams } from 'react-router-dom'
import SingleProject from './SingleProject'
import { IoIosHome } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'
import { ProjectData } from '../../Features/ProjectSlice'
import Spinner from '../../Spinner/Spinner'

const Project = () => {

    const name = useParams().name

    const { data, isLoading } = useSelector(state => state.project)

    const dispatch = useDispatch()
    const location = useLocation()

    useEffect(() => {
        dispatch(ProjectData(name))
         // eslint-disable-next-line
    }, [name])

    const [showham, setShowHam] = useState(false)

    const myStyle = {
        color: 'red',
        fontWeight: '700',
        letterSpacing: '1.2px'
    }

    return (
        <>
            {
                isLoading ? <Spinner /> : <>
                    <div className='project'>
                        <header>
                            <div className="project-heading">
                                <h1>PrepBytes Project</h1>
                                <p>ONE-STOP RESOURCE FOR EVERYTHING RELATED TO CODING</p>
                            </div>
                        </header>
                        <div className='project-nav'>
                            <ul className={showham ? "pro-nav-menu proActive" : "pro-nav-menu"} onClick={() => setShowHam(!showham)}>
                                <li className='pro-nav-item'>
                                    <Link to="/"><IoIosHome className='home-icon' /></Link>
                                </li>
                                <li className='pro-nav-item' onClick={() => setShowHam(false)}>
                                    <Link to="/project/html" style={location.pathname === "/project/html" ? myStyle : {}}>HTML</Link>
                                </li>
                                <li className='pro-nav-item' onClick={() => setShowHam(false)}>
                                    <Link to="/project/css" style={location.pathname === "/project/css" ? myStyle : {}}>CSS</Link>
                                </li>
                                <li className='pro-nav-item' onClick={() => setShowHam(false)}>
                                    <Link to="/project/javascript" style={location.pathname === "/project/javascript" ? myStyle : {}}>JAVASCRIPT</Link>
                                </li>
                                <li className='pro-nav-item' onClick={() => setShowHam(false)}>
                                    <Link to="/project/react" style={location.pathname === "/project/react" ? myStyle : {}}>REACT</Link>
                                </li>
                                <li className='pro-nav-item' onClick={() => setShowHam(false)}>
                                    <Link to="/project/node" style={location.pathname === "/project/node" ? myStyle : {}}>NODE JS</Link>
                                </li>
                                <li className='pro-nav-item' onClick={() => setShowHam(false)}>
                                    <Link to="/project/mongo" style={location.pathname === "/project/mongo" ? myStyle : {}}>MONGODB</Link>
                                </li>
                            </ul>

                            <div className={showham ? "proham proActive" : "proham"} onClick={() => setShowHam(!showham)}>
                                <span className="hambar"></span>
                                <span className="hambar"></span>
                                <span className="hambar"></span>
                            </div>

                        </div>

                        <SingleProject data={data} name={name} />

                    </div>
                </>
            }
        </>
    )
}

export default Project