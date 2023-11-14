import React from 'react'
import "./Mightbe.css"
// import { useDispatch, useSelector } from "react-redux"
// import { mightData } from '../../../Features/MightSlice'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Mightbe = ({might}) => {

    // const { might } = useSelector(state => state.might)

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(mightData())
    //     //eslint-disable-next-line
    // }, [])

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
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='mightbe'>
            <p>This Might Be You!</p>
            <div className="mightbe-carousel">
                {/* {
                    isLoading ? <h2>Loading....</h2> : */}
                        <Carousel responsive={responsive} infinite={true} swipeable={true}>{
                            might && might.map(elem => (
                                <div className="mightbe-box" key={elem.id}>
                                    <div className="mightbe-heading">
                                        <img src="./images/mightbe/Quote1.webp" alt="Quote1" />
                                        <h5>{elem.name}</h5>
                                    </div>
                                    <p>{elem.about}</p>
                                    <div className="mightbe-down">
                                        <img src="./images/mightbe/Quote2.webp" alt="Quote2" />
                                        <img src={elem.image} alt={elem.name} />
                                    </div>
                                </div>
                            ))}
                            </ Carousel>
                {/* } */}
            </div>
        </div>
    )
}

export default Mightbe      