import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-main'>
            <div className="footer-main-top">
                <div className="footer-follow-contact">
                    <div className="footer-follow">
                        <p>FOLLOW US</p>
                        <div className="footer-follow-img">
                            <img src="./images/footer/facebook.svg" alt="facebook" />
                            <img src="./images/footer/instagram.svg" alt="instagram" />
                            <img src="./images/footer/linkedin.svg" alt="linkedin" />
                            <img src="./images/footer/youtube.svg" alt="youtube" />
                        </div>
                    </div>
                    <div className="footer-contact-us">
                        <p>CONTACT US</p>
                        <div className="footer-contact-img">
                            <div>
                                <img src="./images/footer/phone.svg" alt="phone" />
                                <Link>+91-7969 0021 11</Link>
                            </div>
                            <div>
                                <img src="./images/footer/message.svg" alt="message" />
                                <Link>support@prepbytes.com</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-latest-popular">
                    <div className="footer-latest">
                        <p>LATEST ARTICLES</p>
                        <div className="footer-latest-articles">
                            <Link>Tech Mahindra Interview Questions</Link>
                            <Link>CPP Interview Question</Link>
                            <Link>Angular Interview Questions</Link>
                            <Link>Cal Command in Linux with Examples</Link>
                            <Link>Head Command Linux Examples</Link>
                        </div>
                    </div>
                    <div className="footer-popular">
                        <p>POPULAR ARTICLES</p>
                        <div className="footer-popular-articles">
                            <Link>GIT Interview Questions and Answers</Link>
                            <Link>Cloud Computing Interview Questions</Link>
                            <Link>Automation Testing Interview Questions</Link>
                            <Link>Django Interview Questions</Link>
                            <Link>MongoDB Interview Questions</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-quick">
                    <p>QUICK LINKS</p>
                    <div className="footer-quick-links">
                        <Link to="/online-full-stack-developer-mern-certification-program">Full Stack Program</Link>
                        <Link to="/mock-tests">Mock Tests</Link>
                        <Link to="/mern-stack-web-development-career">Elevation Academy</Link>
                        <Link to="/preparation-videos">Video Tutorials</Link>
                        <Link to="/master-competitive-programming">Competitive</Link>
                        <Link to="/project/html">Projects</Link>
                    </div>
                </div>
            </div>

            <div className="footer-main-down">
                <div className="footer-down-left">
                    <p>Copyright&copy; {new Date().getFullYear()}</p>
                </div>
                <div className="footer-down-right">
                    <Link>Privacy Policy</Link>
                    <Link>Refund Policy</Link>
                    <Link>Terms of Use</Link>
                </div>
            </div>

        </div>
    )
}

export default Footer