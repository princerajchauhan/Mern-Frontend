import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import LoginSignup from '../Pages/LoginSignup/LoginSignup'
import { ToastContainer } from 'react-toastify'
import MockTests from '../Pages/MockTests/MockTests'
import Videos from '../Pages/Videos/Videos'
import Competitive from '../Pages/MasterCompetitive/Competitive'
import FullStack from '../Pages/FullStack'
import Elevation from '../Pages/Elevation'
import Success from '../Pages/SuccessCancel/Success'
import Cancel from '../Pages/SuccessCancel/Cancel'
import Dashboard from '../Pages/Dashboard/Dashboard'
import Project from '../Pages/Projects/Project'

const Routing = () => {
  
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<LoginSignup />} />
                <Route path='/register' element={<LoginSignup />} />
                <Route path='/mock-tests' element={<MockTests />} />
                <Route path='/preparation-videos' element={<Videos />} />
                <Route path='/master-competitive-programming' element={<Competitive />} />
                <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStack />} />
                <Route path='/mern-stack-web-development-career' element={<Elevation />} />
                <Route path='/success' element={<Success />} />
                <Route path='/cancel' element={<Cancel />} />
                <Route path='/panel' element={<Dashboard />} />
                <Route path='/project/:name' element={<Project />} />
            </Routes>
            <ToastContainer />
        </>
    )
}

export default Routing