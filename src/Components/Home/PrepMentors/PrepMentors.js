import React from 'react'
import "./Mentors.css"

const PrepMentors = () => {
    return (
        <div className='mentors-main'>
            <div className="mentors-heading">
                <h2>PrepBytes Mentors</h2>
                <p>PrepBytes students get mentored by industry experts who have achieved in their careers and are passionate about helping students achieve their dream.</p>
            </div>
            <div className="mentors-main-box">
                {/* *************************** MENTOR FIRST ******************** */}
                <div className="mentors-box">
                    <div className="mentors-image">
                        <div className="mentors-top-bg">
                            <img src="./images/mentors/mamta_mentor_background.png" alt="mamta_mentor_background" />
                        </div>
                        <div className="mentors-img">
                            <img src="./images/mentors/mamta_ma'am(Mentor).png" alt="mamta_ma'am(Mentor)" />
                        </div>
                    </div>
                    <div className="name-detail">
                        <p>Mamta</p>
                        <p>Co-Founder, PrepBytes</p>
                    </div>
                    <div className="mentors-desc">
                        <p>Mamta has a great passion for coding and motivates students to pursue coding. Her mission is to use her knowledge and expertise to help students get placed in their dream company.</p>
                    </div>
                    <div className="mentors-company">
                        <img src="./images/mentors/Amazon+sam.png" alt="Amazon+sam" />
                    </div>
                </div>
                {/* *************************** MENTOR SECOND ******************** */}
                <div className="mentors-box">
                    <div className="mentors-image">
                        <div className="mentors-top-bg">
                            <img src="./images/mentors/aditya_mentor_background.png" alt="aditya_mentor_background" />
                        </div>
                        <div className="mentors-img">
                            <img src="./images/mentors/Aditya_bhusan.png" alt="Aditya_bhusan" />
                        </div>
                    </div>
                    <div className="name-detail">
                        <p>Aditya</p>
                        <p>Co-Founder, PrepBytes</p>
                    </div>
                    <div className="mentors-desc">
                        <p>Aditya has over 5 years of industry experience and has been part of multiple hiring sprees. He is a placement expert and knows very well what is required to nail it in interviews.</p>
                    </div>
                    <div className="mentors-company">
                        <img src="./images/mentors/PrepBytes.png" alt="PrepBytes" />
                        <img src="./images/mentors/IIT_kharagpur.png" alt="IIT_kharagpur" />
                    </div>
                </div>
                {/* *************************** MENTOR THIRD ******************** */}
                <div className="mentors-box">
                    <div className="mentors-image">
                        <div className="mentors-top-bg">
                            <img src="./images/mentors/aveek_mentor_background.png" alt="aveek_mentor_background" />
                        </div>
                        <div className="mentors-img">
                            <img src="./images/mentors/aveek_sir.png" alt="aveek_sir" />
                        </div>
                    </div>
                    <div className="name-detail">
                        <p>Aveek</p>
                        <p>Mentor, PrepBytes</p>
                    </div>
                    <div className="mentors-desc">
                        <p>Aveek is a Technical Content Engineer / Mentor at PrepBytes and has mentored more than 2500 students to date. His teaching methodology is very engaging and highly appreciated by students</p>
                    </div>
                    <div className="mentors-company">
                        <img src="./images/mentors/PrepBytes.png" alt="PrepBytes" />
                    </div>
                </div>
                {/* *************************** MENTOR FOURTH ******************** */}
                <div className="mentors-box">
                    <div className="mentors-image">
                        <div className="mentors-top-bg">
                            <img src="./images/mentors/kunal_dwivedi_mentor_background.png" alt="kunal_dwivedi_mentor_background" />
                        </div>
                        <div className="mentors-img">
                            <img src="./images/mentors/kunal_sir.png" alt="kunal_sir" />
                        </div>
                    </div>
                    <div className="name-detail">
                        <p>Kunal</p>
                        <p>SDE, Amazon</p>
                    </div>
                    <div className="mentors-desc">
                        <p>Kunal loves competitive programming and likes to spend time teaching students. He has secured under 100 rank in various coding challenges and 287th rank in Google Kickstart.</p>
                    </div>
                    <div className="mentors-company">
                        <img src="./images/mentors/Amazon+sam.png" alt="Amazon+sam" />
                    </div>
                </div>
                {/* *************************** MENTOR FIFTH ******************** */}
                <div className="mentors-box">
                    <div className="mentors-image">
                        <div className="mentors-top-bg">
                            <img src="./images/mentors/virali_vora_mentor_background.png" alt="virali_vora_mentor_background" />
                        </div>
                        <div className="mentors-img">
                            <img src="./images/mentors/virali_vora.png" alt="virali_vora" />
                        </div>
                    </div>
                    <div className="name-detail">
                        <p>Virali</p>
                        <p>SDE, Google</p>
                    </div>
                    <div className="mentors-desc">
                        <p>Virali is one of the top coders of the country. She has mentored thousands of students at PrepBytes and has motivated them to think big and achieve big.</p>
                    </div>
                    <div className="mentors-company">
                        <img src="./images/mentors/Google_logo.png" alt="Google_logo" />
                    </div>
                </div>
                {/* *************************** MENTOR SIXTH ******************** */}
                <div className="mentors-box">
                    <div className="mentors-image">
                        <div className="mentors-top-bg">
                            <img src="./images/mentors/sharechat_mentor_background.png" alt="sharechat_mentor_background" />
                        </div>
                        <div className="mentors-img">
                            <img src="./images/mentors/kushdeep_sir.png" alt="kushdeep_sir" />
                        </div>
                    </div>
                    <div className="name-detail">
                        <p>Kuldeep</p>
                        <p>SDE, Sharechat</p>
                    </div>
                    <div className="mentors-desc">
                        <p>He is a Competitive Programmer with some achievements like 5 stars at Codechef and a Specialist at Codeforces. He loves to guide students in achieving their goals and getting them placed in their dream companies.</p>
                    </div>
                    <div className="mentors-company">
                        <img src="./images/mentors/sharechat.png" alt="sharechat" />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PrepMentors