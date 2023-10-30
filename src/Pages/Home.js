import React from 'react'
import MainSection from '../Components/MainSection/MainSection'
import StairsApproach from '../Components/StairsApproach/StairsApproach'
import WantSection from '../Components/WantSection/WantSection'
import Experience from '../Components/Experience/Experience'
import Founder from '../Components/Founder/Founder'
import Instructor from '../Components/Instructor/Instructor'
import StundentFinish from '../Components/StudentsFinish/StundentFinish'
import PrepMentors from '../Components/PrepMentors/PrepMentors'
import Question from '../Components/SolveQuestion/Question'
import College from '../Components/CollegeRepresentation/College'
import MentorCollege from '../Components/MentorsColleges/MentorCollege'
import PopularBlogs from '../Components/PopularBlogs/PopularBlogs'
import FixFooter from '../Components/FixFooter/FixFooter'
import TalkToExperts from '../Components/TalkToExperts/TalkToExperts'

const Home = () => {
    return (
        <>
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
        </>
    )
}

export default Home