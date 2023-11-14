import React, { useEffect } from "react";
import ElevationTop from "../Components/ElevationAcademy/ElevationTop/ElevationTop";
import NewBatch from "../Components/ElevationAcademy/NewBatch/NewBatch";
import DreamJob from "../Components/ElevationAcademy/DreamJob/DreamJob";
import WhyPrepbytes from "../Components/ElevationAcademy/WhyPrepbytes/WhyPrepbytes";
import ElevationProgram from "../Components/ElevationAcademy/ElevationProgram/ElevationProgram";
import UpComingBatch from "../Components/ElevationAcademy/UpComingBatch/UpComingBatch";
import ElevationTestimonials from "../Components/ElevationAcademy/ElevationTestimonials/ElevationTestimonials";
import PlacedStudents from "../Components/ElevationAcademy/PlacedStudents/PlacedStudents";
import Application from "../Components/ElevationAcademy/Application/Application";
import PaymentPlans from "../Components/ElevationAcademy/PaymentPlans/PaymentPlans";
import ElevationMentors from "../Components/ElevationAcademy/ElevationMntors/ElevationMentors";
import FreeWebinar from "../Components/ElevationAcademy/FreeWebinar/FreeWebinar";
import ElevationFaq from "../Components/ElevationAcademy/ElevationFaq/ElevationFaq";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { mightData } from "../Features/MightSlice";
import Spinner from "../Spinner/Spinner";

const Elevation = () => {

    const { might, isLoading } = useSelector(state => state.might)
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        dispatch(mightData())
        document.title = "PrepBytes Elevation Academy | Full Stack Web Development"
    }, [])
    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>
                        <Navbar />
                        <ElevationTop />
                        <NewBatch />
                        <DreamJob />
                        <WhyPrepbytes />
                        <ElevationProgram />
                        <UpComingBatch />
                        <ElevationTestimonials />
                        <PlacedStudents />
                        <Application />
                        <PaymentPlans />
                        <ElevationMentors />
                        <FreeWebinar />
                        <ElevationFaq />
                        <Footer />
                    </>
            }
        </>
    )
}

export default Elevation