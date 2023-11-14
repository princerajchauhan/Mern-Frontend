import React, { useEffect } from 'react'
import "./LoginSignup.css"
import { Link, useLocation } from 'react-router-dom'
import Login from '../../Components/Login/Login'
import Register from '../../Components/Register/Register'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'

const LoginSignup = () => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = location.pathname === "/login" ? "Sign in to your account - PrepBytes" :
            "Sign up to Access Your PrepBytes Account."
    })

    return (
        <>
            <Navbar />
            <div className='login-signup-main'>
                <div className="login-signup-main-inner">
                    <div className="login-signup-left">
                        <div className="login-signup-image">
                            <img src="./images/loginsignup/illustrated.webp" alt="illustrated" />
                        </div>
                        <div className="login-signup-left-box">
                            <img src="./images/loginsignup/logo.webp" alt="logo" />
                            <div>
                                <img src="./images/loginsignup/students.webp" alt="students" />
                                <div>
                                    <p>10K+</p>
                                    <p>Students Enrolled</p>
                                </div>
                            </div>
                            <div>
                                <img src="./images/loginsignup/college.webp" alt="college" />
                                <div>
                                    <p>1000+</p>
                                    <p>Reach in Colleges</p>
                                </div>
                            </div>
                            <div>
                                <img src="./images/loginsignup/learning.webp" alt="learning" />
                                <div>
                                    <p>10K+</p>
                                    <p>Hours of Learning</p>
                                </div>
                            </div>
                            <div>
                                <img src="./images/loginsignup/social.webp" alt="social" />
                                <div>
                                    <p>15K+</p>
                                    <p>Social Community</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="login-signup-right">
                        <div className="login-signup-right-box">
                            <div className="login-signup-right-top-btn">
                                <Link to='/register' className={location.pathname === '/register' ? 'btn-active' : ''}
                                    style={{ color: location.pathname === '/register' ? "#4b8ce8" : '#6b6f70' }}
                                >
                                    SIGNUP
                                </Link>
                                <Link to='/login' className={location.pathname === '/login' ? 'btn-active' : ''}
                                    style={{ color: location.pathname === '/login' ? "#4b8ce8" : '#6b6f70' }}
                                >
                                    LOGIN
                                </Link>
                            </div>
                            <div>
                                {
                                    location.pathname === '/login' ? <Login /> : <Register />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LoginSignup