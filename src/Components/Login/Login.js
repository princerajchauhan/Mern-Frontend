import React, { useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import { BsEyeFill } from 'react-icons/bs'
import { BsEyeSlashFill } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

    const navigate = useNavigate()

    const [show, setShow] = useState(true)

    const [value, setValue] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.post("https://mern-backend-pntb.onrender.com/api/login", value)
        .then(res => {
            if (res.data.msg2) {
                toast(res.data.msg, {type:'success', theme:'colored'})
                if (res.data.token) {
                    localStorage.setItem('prepbytes-user', JSON.stringify(res.data))
                    navigate(-1)
                }
            }
            else{
                toast(res.data.msg, {type:'error', theme:'colored'})
            }
        }).catch(err => toast(err, {type:'error', theme:'colored'}))
    }

    return (
        <div className='login-main'>
            <p>Sign in to your account</p>
            <form onSubmit={submitForm}>
                <div className="login-input-box">
                    <input type="email" name='email' value={value.email} onChange={handleChange} autoComplete='off' required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="login-input-box">
                    <input type={show? "password":"text"} name='password' value={value.password} onChange={handleChange} autoComplete='off' required />
                    <label htmlFor="Password">password</label>
                    {
                        show? <BsEyeFill className='login-show-hide' onClick={() => setShow(!show)} />: 
                        <BsEyeSlashFill className='login-show-hide' onClick={() => setShow(!show)} />
                    }
                </div>
                <div className="login-forgot">
                    <Link>Forgot your password?</Link>
                </div>
                <button type='submit' className='login-submit-btn'>SIGN IN</button>
                <button className='otp-btn'>Login Via OTP</button>
            </form>
        </div>
    )
}

export default Login