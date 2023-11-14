import React from 'react'
import "./ElevationTestimonials.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import data from "./ElevationData"

const ElevationTestimonials = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    return (
        <div className="elevation-testimonials-main">
            <div className='elevation-testimonials'>
                <p>Testimonials</p>
                <h4>Our Students Speaks</h4>
                <div className="elevation-testimonials-carousel">
                    {
                        <Carousel responsive={responsive} swipeable={true}>{
                            data && data.map(elem => (
                                <div className="elevation-testimonials-box" key={elem.id}>
                                    <div className="elevation-testimonials-heading">
                                        <img src={elem.photo} alt={elem.name} />
                                        <div>
                                            <h5>{elem.name}</h5>
                                            <p>{elem.company}</p>
                                        </div>
                                    </div>
                                    <p>{elem.desc}</p>
                                </div>
                            ))}
                        </ Carousel>
                    }
                </div>
            </div>
        </div>
    )
}

export default ElevationTestimonials