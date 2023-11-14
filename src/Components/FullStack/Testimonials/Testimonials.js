import React, { useEffect } from 'react'
import "./Testimonials.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { mightData } from '../../../Features/MightSlice';

const Testimonials = () => {

    const { might, isLoading } = useSelector(state => state.might)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mightData())
        //eslint-disable-next-line
    }, [])

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1060 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1060, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <div className="testimonials-main">
            <div className='testimonials'>
                <p>Testimonials</p>
                <h4>Our Students Speaks</h4>
                <div className="testimonials-carousel">
                    {
                        isLoading ? <h2>Loading....</h2> :
                            <Carousel responsive={responsive} swipeable={true}>{
                                might && might.map(elem => (
                                    <div className="testimonials-box" key={elem.id}>
                                        <div className="testimonials-heading">
                                            <img src={elem.image} alt={elem.name} />
                                            <h5>{elem.name}</h5>
                                        </div>
                                        <p>{elem.about}</p>
                                    </div>
                                ))}
                            </ Carousel>
                    }
                </div>
            </div>
            <div className="placement-image">
                <img src="./images/certificate/Feature.webp" alt="Feature" />
            </div>

            <div className="go-to-expert">
                <p>Still confused! Drop your details & get a call back from our academic counselling expert</p>
                <button>Get in touch</button>
            </div>

        </div>
    )
}

export default Testimonials