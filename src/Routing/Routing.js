import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Pages/Home'
import Footer from '../Components/Footer/Footer'
import LoginSignup from '../Pages/LoginSignup/LoginSignup'
import { ToastContainer } from 'react-toastify'
import MockTests from '../Pages/MockTests/MockTests'
import Videos from '../Pages/Videos/Videos'
import Competitive from '../Pages/MasterCompetitive/Competitive'
import FullStack from '../Pages/FullStack'

const Routing = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginSignup />} />
                <Route path='/register' element={<LoginSignup />} />
                <Route path='/mock-tests' element={<MockTests />} />
                <Route path='/preparation-videos' element={<Videos />} />
                <Route path='/master-competitive-programming' element={<Competitive />} />
                <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStack />} />
            </Routes>
            <Footer />
            <ToastContainer />
        </>
    )
}

export default Routing