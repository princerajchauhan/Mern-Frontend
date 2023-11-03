import React from 'react'
import "./CompaniesHire.css"

const CompaniesHire = () =>{
    return(
        <div className='hire-comapny-top'>
        <div className='hire-company'>
            <p>Companies that hire for the roles</p>
            <div className="hire-company-all">

                <div className="hire-company-box">
                    <p>Tech Giants</p>
                    <p>Tech giants keep hiring for web developement roles. You will often find opening for Frontend, Backend or Full Stack Developers. Strong knowledge and good projects will help you grab an oppurtunity here</p>
                    <div className="all-hire-company">
                        <div>
                            <img src="./images/hirecomp/paypal.svg" alt="paypal" />
                            <img src="./images/hirecomp/oracle.svg" alt="oracle" />
                        </div>
                        <div>
                            <img src="./images/hirecomp/walmart.svg" alt="walmart" />
                        </div>
                        <div>
                            <img src="./images/hirecomp/goldman.svg" alt="goldman" />
                            <img src="./images/hirecomp/morgan.svg" alt="morgan" />
                        </div>
                    </div>
                </div>
                <div className="hire-company-box">
                    <p>Established Startups</p>
                    <p>All the well known start ups have their website and they use latest tech to build them. Experience with web development and good problem skill is all you need to crack these companies.</p>
                    <div className="all-hire-company">
                        <div>
                            <img src="./images/hirecomp/makemytrip.svg" alt="makemytrip" />
                            <img src="./images/hirecomp/byjus.svg" alt="byjus" />
                        </div>
                        <div>
                            <img src="./images/hirecomp/paytm.svg" alt="paytm" />
                        </div>
                        <div>
                            <img src="./images/hirecomp/delhivery.svg" alt="delhivery" />
                            <img src="./images/hirecomp/flipkart.svg" alt="flipkart" />
                        </div>
                    </div>
                </div>
                <div className="hire-company-box">
                    <p>Growing Startups</p>
                    <p>Almost Every Startup have a web app or mobile app. Hundreds of growing startups or Early-stage startup keep looking for interns or web developers to help them convert their idea to reality.</p>
                    <div className="all-hire-company">
                        <div>
                            <img src="./images/hirecomp/fab.svg" alt="fab" />
                            <img src="./images/hirecomp/mygate.svg" alt="mygate" />
                        </div>
                        <div>
                            <img src="./images/hirecomp/wedme.svg" alt="wedme" />
                        </div>
                        <div>
                            <img src="./images/hirecomp/styleme.svg" alt="styleme" />
                            <img src="./images/hirecomp/neostencil.svg" alt="neostencil" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default CompaniesHire