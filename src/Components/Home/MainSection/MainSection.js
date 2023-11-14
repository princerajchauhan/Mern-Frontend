import React from 'react'
import "./MainSection.css"

const MainSection = () => {
    return (
        <div className='hero-main'>
            <div className="top-image-side">
                <div className="know-more">
                    <p>
                        <span>Start your journey of success</span>
                        Personalised Coding Programs to make coding easier for you
                    </p>
                    <p>Want to know how PrepBytes can help you?</p>
                    <button>Know More</button>
                </div>
                <div className="image-side">
                    <img src="./images/topimg.svg" alt="main-img" />
                </div>
            </div>
            <div className="four-company">
                <div>
                    <img src="./images/fourCompany/Google-launchpad.webp" alt="Google-launchpad" />
                </div>
                <div>
                    <img src="./images/fourCompany/future-skills-homepage.webp" alt="Google-launchpad" />
                </div>
                <div>
                    <img src="./images/fourCompany/she-leads.webp" alt="Google-launchpad" />
                </div>
                <div>
                    <img src="./images/fourCompany/aws-ed-start.webp" alt="Google-launchpad" />
                </div>
            </div>
        </div>
    )
}

export default MainSection