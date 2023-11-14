import React, { useEffect, useState } from 'react'
import "./Dashboard.css"
import DashNav from './DashNav'
import { useDispatch, useSelector } from 'react-redux'
import { AllTest } from '../../Features/AllTestSlice'
import Spinner from '../../Spinner/Spinner'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const [drawer, setDrawer] = useState(true)
    const [token, setToken] = useState()

    const { alltest, isLoading } = useSelector(state => state.alltest)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(AllTest())
        const user = JSON.parse(localStorage.getItem("prepbytes-user"))
        if (user) {
            setToken(user.token)
        }
        else {
            navigate("/")
        }
        // eslint-disable-next-line
    }, [])


    return (
        <>
            {
                token ?
                    isLoading ? <Spinner /> : <>
                        <DashNav drawer={drawer} setDrawer={setDrawer} />
                        <div className='panel-nav'>
                            <div className="panel-nav-drawer" style={{ width: drawer ? "280px" : "80px" }}>
                                <div className="panel-nav-down">
                                    <span>
                                        <svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d='M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z'>
                                            </path>
                                        </svg>
                                    </span>
                                    {
                                        drawer ? <span className="panel-name-list">My Courses</span> : <span className="panel-name-close"></span>
                                    }
                                    {/* <span className={drawer? "panel-name-list": "panel-name-close"}>My Courses</span> */}
                                </div>
                            </div>
                            <div className="panel-nav-main">
                                <div className="panel-main-heading">
                                    <p>Courses <span>({alltest.length})</span></p>
                                </div>
                                <div className="panel-main-down">
                                    <div className="mock-test-all-box">
                                        {
                                            isLoading ? <h3>Loading....</h3> :

                                                alltest && alltest.map(elem => (
                                                    <div className="mock-test-box" key={elem.id}>
                                                        {/* <p className='mock-test-price'>Buy: ₹{elem.price}</p> */}
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
                                                            <button>Purhcased</button>
                                                        </div>
                                                    </div>
                                                ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </> : ''
            }
        </>
    )
}

export default Dashboard