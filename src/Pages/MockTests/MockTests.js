import React, { useEffect } from 'react'
import './MockTests.css'
import { useDispatch, useSelector } from 'react-redux'
import { mockTest } from '../../Features/MockTestSlice'
import Spinner from '../../Spinner/Spinner'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import { MakePayment } from '../../Components/MakePayments/MakePayment'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const MockTests = () => {

    // const [mock, setMock] = useState([])
    const { test, isLoading } = useSelector(state => state.test)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    useEffect(() => {
        document.title = "Mock Tests | Technical and Aptitude Test | PrepBytes"
        dispatch(mockTest())
        // eslint-disable-next-line
    }, [])

    const CheckTest = async(elem) =>{
        const check = await axios.post("https://mern-backend-pntb.onrender.com/api/buytest", elem).then(res => res.data).catch(err => console.log(err))
        if (check.msg2 === true) {
            MakePayment(elem)
        }
        else{
            toast(check.msg, {theme:'colored', type:'warning'})
        }
    }

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    <>
                        <Navbar />
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
                                                        <p className='mock-test-price'>Buy: ₹{elem.price}</p>
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
                                                            {
                                                                JSON.parse(localStorage.getItem("prepbytes-user")) ? 
                                                                <button onClick={() => CheckTest(elem)}>Test Now</button>:
                                                                <button onClick={() => navigate("/login")}>Login/Signup</button>
                                                            }
                                                        </div>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                        <Footer />
                    </>
            }
        </>
    )
}

export default MockTests