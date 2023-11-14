import React, { useState } from 'react'
import "./Faqs.css"
import { FaPlus, FaMinus } from 'react-icons/fa6'

const Faqs = () => {

    const [show, setShow] = useState({
        show1: true,
        show2: true,
        show3: true,
        show4: true,
        show5: true,
    })

    return (
        <div className='faqs'>
            <div className="faqs-heading">
                <p>FAQS</p>
                <span style={{display: "none"}}><FaMinus /></span>
            </div>
            <div className="faqs-wrapper">
                <div className="faqs-all-wrapper">

                    <div className="faqs-box">
                        <button onClick={() => setShow({ ...show, show1: !show.show1 })}>
                            What is the duration of this program?
                            {show.show1 ? <span><FaPlus /></span> : <span><FaPlus /></span>}
                        </button>
                        {
                            show.show1 ? '' :
                                <div>
                                    <p>Duration of this program is 3-4 months</p>
                                </div>
                        }
                    </div>

                    <div className="faqs-box">
                        <button onClick={() => setShow({ ...show, show2: !show.show2 })}>
                            What will be the primary language for this program?
                            {show.show2 ? <span><FaPlus /></span> : <span><FaPlus /></span>}
                        </button>
                        {
                            show.show2 ? '' :
                                <div>
                                    <p>Javascript would be the primary language.</p>
                                </div>
                        }
                    </div>

                    <div className="faqs-box">
                        <button onClick={() => setShow({ ...show, show3: !show.show3 })}>
                            Is there any pre-requisite for this program?
                            {show.show3 ? <span><FaPlus /></span> : <span><FaPlus /></span>}
                        </button>
                        {
                            show.show3 ? '' :
                                <div>
                                    <p>No, there are no pre-requisites.</p>
                                </div>
                        }
                    </div>

                    <div className="faqs-box">
                        <button onClick={() => setShow({ ...show, show4: !show.show4 })}>
                            What if I miss the Live sessions?
                            {show.show4 ? <span><FaPlus /></span> : <span><FaPlus /></span>}
                        </button>
                        {
                            show.show4 ? '' :
                                <div>
                                    <p>Although its highly recommended to not miss the live project sessions but in case if missed recording of the session would be added in your dashboard.</p>
                                </div>
                        }
                    </div>

                    <div className="faqs-box">
                        <button onClick={() => setShow({ ...show, show5: !show.show5 })}>
                            How is this program different from other full stack courses?
                            {show.show5 ? <span><FaPlus /></span> : <span><FaPlus /></span>}
                        </button>
                        {
                            show.show5 ? '' :
                                <div>
                                    <p>This program provides not only learning but also complete experience of a full stack developer & software development cycle.</p>
                                </div>
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Faqs