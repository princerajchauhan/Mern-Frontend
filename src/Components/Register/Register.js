import React, { useState } from 'react'
import "./Register.css"
import { BsEyeFill } from 'react-icons/bs'
import { BsEyeSlashFill } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [show, setShow] = useState(true)

    const navigate = useNavigate()

    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        college: '',
        check: false,
        year: ''
    })

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const submitForm = (e) => {
        e.preventDefault()
        axios.post("https://mern-backend-pntb.onrender.com/api/register", value)
            .then(res => {
                console.log(res.data)
                if (res.data.msg2) {
                    toast(res.data.msg, { type: 'success', theme: 'colored' })
                    if (res.data.token) {
                        localStorage.setItem('prepbytes-user', JSON.stringify(res.data))
                        navigate('/')
                    }
                }
                else {
                    toast(res.data.msg, { type: 'warning', theme: 'colored' })
                }
            }).catch(err => toast(err, { type: 'error', theme: 'colored' }))
    }

    return (
        <div className='register-main'>
            <p>Create your new account</p>
            <form onSubmit={submitForm}>
                <div className="register-input-box">
                    <input type="text" name='name' value={value.name} onChange={handleChange} autoComplete='off' required />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="register-input-box">
                    <input type="email" name='email' value={value.email} onChange={handleChange} autoComplete='off' required />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="register-input-box">
                    <input type="number" name='phone' value={value.phone} onChange={handleChange} autoComplete='off' required />
                    <label htmlFor="Phone">Phone</label>
                </div>
                <div className="register-input-box">
                    <input type={show ? "password" : "text"} name='password' value={value.password} onChange={handleChange} autoComplete='off' required />
                    <label htmlFor="password">Password</label>
                    {
                        show ? <BsEyeFill className='register-show-hide' onClick={() => setShow(!show)} /> :
                            <BsEyeSlashFill className='register-show-hide' onClick={() => setShow(!show)} />
                    }
                </div>
                <div className='register-boxes'>
                    <div className="register-input-box register-college">
                        <input type="text" name='college' value={value.college} onChange={handleChange} autoComplete='off' required />
                        <label htmlFor="college">College</label>
                    </div>
                    <div className="register-input-box register-select">
                        <select onChange={e => setValue({ ...value, year: e.target.value })}>
                            <option selected disabled hidden>Passing Year</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                        </select>
                    </div>
                </div>
                <div className="register-agree">
                    <input type="checkbox" name="check" onChange={e => setValue({ ...value, check: !value.check })} />
                    <label htmlFor="check"> I agree for the <span>terms and conditions.</span></label>
                </div>
                <button type='submit' className='register-submit-btn'>SIGN UP</button>
            </form>
        </div>
    )
}

export default Register