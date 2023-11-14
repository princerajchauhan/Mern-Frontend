import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

const Cancel = () => {
    return (
        <>
            <Navbar />
            <div style={{
                padding: "50px 10px", display: "flex", alignItems: 'center', 
                justifyContent: "center", marginTop: '100px', textAlign: 'center',
                flexDirection: 'column'
            }}>
                <h2>Sorry ! </h2>
                <p>You cancel the payment</p>
            </div>
            <Footer />
        </>
    )
}

export default Cancel