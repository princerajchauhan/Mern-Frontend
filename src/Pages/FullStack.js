import React, { useEffect } from 'react'
import FutureSkills from '../Components/FullStack/FutureSkills/FutureSkills'
import SelectBatch from '../Components/FullStack/SelectBatch/SelectBatch'
import Languages from '../Components/FullStack/Languages/Languages'
import Journey from '../Components/FullStack/Journey/Journey'
import AfterFinish from '../Components/FullStack/AfterFinish/AfterFinish'
import CompaniesHire from '../Components/FullStack/CompaniesHire/CompaniesHire'
import IndustryGrowth from '../Components/FullStack/IndustryGrowth/IndustryGrowth'
import MentorInstructor from '../Components/FullStack/MentorInstructor/MentorInstructor'
import ProgramSyllabus from '../Components/FullStack/ProgramSyllabus/ProgramSyllabus'
import Certification from '../Components/FullStack/Certification/Certification'
import GetTouch from '../Components/FullStack/GetTouch/GetTouch'
import Testimonials from '../Components/FullStack/Testimonials/Testimonials'
import Faqs from '../Components/FullStack/Faqs/Faqs'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Spinner from '../Spinner/Spinner'
import { useDispatch, useSelector } from 'react-redux'
import { videoLinks } from '../Features/VideoSlice'

const FullStack = () => {


    const { isLoading } = useSelector(state => state.video)
    const dispatch = useDispatch()
    
    useEffect(() =>{
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        dispatch(videoLinks())
        document.title = "Learn Full Stack Web Development | Mern Certification Program | PrepBytes"
    }, [])
    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>
                        <Navbar />
                        <FutureSkills />
                        <SelectBatch />
                        <Languages />
                        <Journey />
                        <AfterFinish />
                        <CompaniesHire />
                        <IndustryGrowth />
                        <MentorInstructor />
                        <ProgramSyllabus />
                        <Certification />
                        <GetTouch />
                        <Testimonials />
                        <Faqs />
                        <Footer />
                    </>
            }
        </>
    )
}

export default FullStack