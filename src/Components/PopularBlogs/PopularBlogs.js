import React from 'react'
import "./PopularBlogs.css"
import { Link } from 'react-router-dom'

const PopularBlogs = () => {
    return (
        <div className='pop-blogs-main'>
            <p>Most Popular Blogs</p>
            <div className="pop-blogs-three-box">
                <div className="pop-blogs-box">
                    <img src="./images/PopularBlogs/blog_top_50_interview_questions_answers.png" alt="blog_top_50_interview_questions_answers" />
                    <p>Top 50 C Programming Interview Questions and Answers</p>
                    <div className="read-btn">
                        <Link>Read Now</Link>
                    </div>
                </div>

                <div className="pop-blogs-box">
                    <img src="./images/PopularBlogs/blog_vinit_story.png" alt="blog_vinit_story" />
                    <p>Motivational Story : He got his first placement success after being rejected by 22 companies</p>
                    <div className="read-btn">
                        <Link>Read Now</Link>
                    </div>
                </div>

                <div className="pop-blogs-box">
                    <img src="./images/PopularBlogs/blog_top_50_interview_questions_answers.png" alt="blog_top_50_interview_questions_answers" />
                    <p>Lyrics from the famous track aptly describes the situation of every fresher when it comes to facing the interview</p>
                    <div className="read-btn">
                        <Link>Read Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularBlogs