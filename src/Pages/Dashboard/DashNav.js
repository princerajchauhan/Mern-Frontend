import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx"
import { GiHamburgerMenu } from "react-icons/gi"
import "./DashNav.css"

const DashNav = ({ drawer, setDrawer }) => {

    const [user, setUser] = useState()
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("prepbytes-user"))
        if (userInfo) {
            setUser(userInfo)
        }
    }, [])

    const capitalize = (name) => {
        return name[0].toUpperCase() + name.slice(1)
    }

    const logoutFun = () => {
        localStorage.removeItem("prepbytes-user")
        window.location.reload();
        navigate("/")
    }

    return (
        <div className="nav-main dash-nav">
            <div className="dash-nav-logo">
                <div className="dash-nav-side" onClick={() => setDrawer(!drawer)}  style={{marginRight: drawer? '180px': '0px'}}>
                    {
                        drawer ? <RxCross1 /> : <GiHamburgerMenu />
                    }
                </div>
                <div className="logo">
                    <img src='./images/logoPrepBytes.svg' alt='Logo' onClick={() => navigate('/')} />
                </div>
            </div>
            {
                user && <div className='dashboard-name' onClick={() => setShow(!show)}>
                    <div>{user.name[0].toUpperCase()}</div>
                    <span>Hi {capitalize(user.name)}</span>
                    {
                        show &&
                        <div className='dash-logout dash-nav-log'>
                            <ul>
                                <li onClick={logoutFun}>Logout</li>
                            </ul>
                        </div>
                    }
                </div>
            }

        </div>
    )
}

export default DashNav