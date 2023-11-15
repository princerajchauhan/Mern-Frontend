import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Success = () => {
    return (
        <>
            <Navbar />
            <div style={{ padding: "50px 10px", display:"flex", alignItems:'center', justifyContent:"center", marginTop: '100px', textAlign: 'center'}}>
                <h2>Thank You For Purchasing !</h2>
            </div>
            <Footer />
        </>
    )
}

export default Success