import React, { useEffect } from 'react'
import MainSection from '../Components/Home/MainSection/MainSection'
import StairsApproach from '../Components/Home/StairsApproach/StairsApproach'
import WantSection from '../Components/Home/WantSection/WantSection'
import Experience from '../Components/Home/Experience/Experience'
import Founder from '../Components/Home/Founder/Founder'
import Instructor from '../Components/Home/Instructor/Instructor'
import StundentFinish from '../Components/Home/StudentsFinish/StundentFinish'
import PrepMentors from '../Components/Home/PrepMentors/PrepMentors'
import Question from '../Components/Home/SolveQuestion/Question'
import College from '../Components/Home/CollegeRepresentation/College'
import MentorCollege from '../Components/Home/MentorsColleges/MentorCollege'
import FixFooter from '../Components/Home/FixFooter/FixFooter'
import PopularBlogs from '../Components/Home/PopularBlogs/PopularBlogs'
import TalkToExperts from '../Components/Home/TalkToExperts/TalkToExperts'
import Navbar from "../Components/Navbar/Navbar"
import Footer from "../Components/Footer/Footer"

const Home = () => {
    useEffect(() =>{
        window.scrollTo(0, 0)
    })
    useEffect(() => {
        document.title = "Masters in Competitive Coding | Crack Coding Interviews | PrepBytes"
    }, [])
    return (
        <>
            <Navbar />
            <MainSection />
            <StairsApproach />
            <WantSection />
            <Experience />
            <Founder />
            <Instructor />
            <StundentFinish />
            <PrepMentors />
            <Question />
            <College />
            <MentorCollege />
            <PopularBlogs />
            <TalkToExperts />
            <FixFooter />
            <Footer />
        </>
    )
}

export default Home