import React from 'react'
import "./Navbar.css"
import { MdArrowDropDown } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='nav-main'>
            <div className="logo">
                <img src='./images/logoPrepBytes.svg' alt='Logo' onClick={() => navigate('/')} />
            </div>
            <nav>
                <div className="login-register">
                    <button><Link to='/login'>Login</Link></button>
                    <button><Link to='/register'>Sign up</Link></button>
                </div>
                <ul className="nav-menu">
                    <li className="nav-item"><span>Study Material<MdArrowDropDown /></span>
                        <ul className="sub-nav-menu">
                            <li><Link to="/mock-tests">Mock Test</Link></li>
                            <li><Link to="/preparation-videos">Video Tutorial</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><span>Courses and Programs<MdArrowDropDown /></span>
                    <ul className="sub-nav-menu sub-item1">
                            <li><Link to="master-competitive-programming">Master Competitive Programming</Link></li>
                            <li><Link to="online-full-stack-developer-mern-certification-program">Full Stack Program</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item">Elevation Academy</li>
                    <li className="nav-item"><span>Project<MdArrowDropDown /></span>
                        <ul className="sub-nav-menu sub-item3">
                            <li><Link>Html</Link></li>
                            <li><Link>CSS</Link></li>
                            <li><Link>JavaScript</Link></li>
                            <li><Link>React</Link></li>
                            <li><Link>Node Js</Link></li>
                            <li><Link>MongoDB</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar