import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { IoMdArrowDropdown } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState()
    const [show, setShow] = useState(false)

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("prepbytes-user"))
        if (userInfo) {
            setUser(userInfo)
        }
    }, [])

    const capitalize = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }

    const logoutFun = () => {
        localStorage.removeItem("prepbytes-user")
        window.location.reload();
        navigate("/")
    }

    const [showham] = useState(false)

    useEffect(() => {
        const hamburger = document.querySelector('.hamburger')
        const navMenu = document.querySelector('.second-nav-menu')


        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamActive')
            navMenu.classList.toggle('hamActive')
            console.log()
        })

        document.querySelectorAll('.second-nav-item').forEach(n => {
            n.addEventListener('click', () => {
                hamburger.classList.remove('hamActive')
                navMenu.classList.remove('hamActive')
                console.log()
            })
        })

    }, [showham])

    return (
        <div className='nav-main'>
            <div className="logo">
                <img src='./images/logoPrepBytes.svg' alt='Logo' onClick={() => navigate('/')} />
            </div>
            {/* ******************** FIRST NAV ****************************** */}
            <nav>
                {
                    !user &&
                    <div className="login-register">
                        <button><Link to='/login'>Login</Link></button>
                        <button><Link to='/register'>Sign up</Link></button>
                    </div>
                }
                <ul className="nav-menu" style={{ alignItems: user ? "center" : '' }}>
                    <li className="nav-item"><span>Study Material<IoMdArrowDropdown /></span>
                        <ul className="sub-nav-menu">
                            <li><Link to="/mock-tests">Mock Test</Link></li>
                            <li><Link to="/preparation-videos">Video Tutorial</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item"><span>Courses and Programs<IoMdArrowDropdown /></span>
                        <ul className="sub-nav-menu sub-item1">
                            <li><Link to="/master-competitive-programming">Master Competitive Programming</Link></li>
                            <li><Link to="/online-full-stack-developer-mern-certification-program">Full Stack Program</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item" onClick={() => navigate("/mern-stack-web-development-career")}>Elevation Academy</li>
                    <li className="nav-item"><span>Project<IoMdArrowDropdown /></span>
                        <ul className="sub-nav-menu sub-item3">
                            <li><Link to="/project/html">Html</Link></li>
                            <li><Link to="/project/css">CSS</Link></li>
                            <li><Link to="/project/javascript">JavaScript</Link></li>
                            <li><Link to="/project/react">React</Link></li>
                            <li><Link to="/project/node">Node Js</Link></li>
                            <li><Link to="/project/mongodb">MongoDB</Link></li>
                        </ul>
                    </li>

                    {
                        user && <li className='dashboard-name' onClick={() => setShow(!show)}>
                            <div>{user.name[0].toUpperCase()}</div>
                            <span>Hi {capitalize(user.name)}</span>
                            {
                                show &&
                                <div className='dash-logout'>
                                    <ul>
                                        <li>
                                            <Link to='/panel'>
                                                <img src="./images/dashboard/dahb.svg" alt="dashboard" />
                                                <p>My Dashboard</p>
                                            </Link>
                                        </li>
                                        <li onClick={logoutFun}>Logout</li>
                                    </ul>
                                </div>
                            }
                        </li>
                    }

                </ul>
            </nav>

            {/* **************************** SECOND NAV ************************** */}

            <div className="second-nav">
                <ul className='second-nav-menu'>
                    {
                        user && <>
                            <li className='second-nav-item'>
                                <Link to="">
                                    <img src="./images/dashboard/user.svg" alt="user" />
                                    <p>Hi {capitalize(user.name)}</p>
                                </Link>
                            </li>
                            <li className='second-nav-item'>
                                <Link to="/panel">
                                    <img src="./images/dashboard/dahb.svg" alt="dahboard" />
                                    <p>My Dashboard</p>
                                </Link>
                            </li>
                        </>
                    }
                    <li className='second-nav-item'><Link to="/master-competitive-programming">Master Competitive Programming</Link></li>
                    <li className='second-nav-item'><Link to="/online-full-stack-developer-mern-certification-program">Full Stack Program</Link></li>
                    <li className='second-nav-item'><Link to="/mern-stack-web-development-career">Elevation Academy</Link></li>
                    <li className='second-nav-item'><Link to="/mock-tests">Mock Tests</Link></li>
                    <li className='second-nav-item'><Link to="/preparation-videos">Video Tutorials</Link></li>
                    {
                        user ? <li className='second-nav-item'><Link onClick={logoutFun}>Logout</Link></li> :
                            <li className='second-nav-item'><Link to="/login">Login/Signup</Link></li>
                    }
                </ul>

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </div>

        </div>
    )
}

export default Navbar