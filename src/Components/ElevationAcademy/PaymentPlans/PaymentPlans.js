import React from 'react'
import "./PaymentPlans.css"

const PaymentPlans = () => {
    return (
        <div className='payment-plans'>
            <div className='payment-plans-main'>
                <p>Payment Plans</p>
                <p>Choose a payment plan suiting your needs</p>
                <div className="payment-plans-top">
                    <div className="payment-plans-money">
                        <div>
                            <img src="./images/elevation/application/tag4-01.webp" alt="tag4-01" />
                            <div>Pay Upfront*</div>
                            <div>Pay Now</div>
                            <div>
                                <p>₹ 70,000</p>
                            </div>
                            <hr style={{ color: '#686463', width: '80%', margin: '18px 0 2px' }} />
                            <div className="payment-money-back">
                                <p>*Money-back guarantee on placements</p>
                            </div>
                            <div>EMI Starting at</div>
                            <div>
                                <p>₹ 5833</p><span>/month</span>
                            </div>
                        </div>
                    </div>
                    <div className="payment-plans-btn">
                        <button>Register</button>
                    </div>
                </div>
                <div className="payment-plans-down">
                    <div>
                        <img src="./images/elevation/application/double_check.svg" alt="double_check" />
                        <p>Guaranteed Placement of minimum 5 LPA</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPlans