import React, { useEffect } from 'react'
import './MockTests.css'
import { useDispatch, useSelector } from 'react-redux'
import { mockTest } from '../../Features/MockTestSlice'

const MockTests = () => {

    // const [mock, setMock] = useState([])
    const { test, isLoading } = useSelector(state => state.test)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(mockTest())
        // eslint-disable-next-line
    }, [])

    return (
        <div className='mock-test-main'>
            <div className="mock-test-top-info">
                <div className="mock-test-top-inner">
                    <h3>Mock Tests</h3>
                    <p>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
                </div>
            </div>

            <div className="mock-test-featured">
                <p className='mock-test-heading'>Featured Mock Tests</p>
                <div className="past-mock-test">
                    <p>PAST MOCK TESTS</p>
                    <div className="mock-test-all-box">
                        {
                            isLoading ? <h3>Loading....</h3> :
                                test && test.map(elem => (
                                    <div className="mock-test-box" key={elem.id}>
                                        <p className='mock-test-price'>Buy: ${elem.price}</p>
                                        <div className="mock-test-icon">
                                            <img src="./images/MockTest/info.svg" alt="info" />
                                            <img src="./images/MockTest/share.svg" alt="share" />
                                        </div>
                                        <div className="mock-test-image">
                                            <img src={elem.image} alt={elem.name} />
                                        </div>
                                        <div className="mock-test-box-heading">
                                            <p>{elem.name}</p>
                                        </div>
                                        <div className="mock-test-date-time">
                                            <div><p>{elem.date} </p><span>Date</span></div>
                                            <div><p>{elem.participants}</p><span>Participants</span></div>
                                            <div><p>{elem.duration} min </p><span>Duration</span></div>
                                        </div>
                                        <div className="mock-test-box-button">
                                            <button>Test Now</button>
                                        </div>
                                    </div>
                                ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MockTests