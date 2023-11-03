import React from 'react' 
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

const FullStack = () =>{
    return(
        <>
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
        </>
    )
}

export default FullStack