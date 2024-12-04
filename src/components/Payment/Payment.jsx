import React from 'react'
import './Payment.css'
import {paymentData} from '../../data/paymentData'
import whiteTick from '../../assets/whiteTick.png'

const Payment = () => {
  return (
    <div className="payment-container" id='price'>
        <div className="blur pay-blur-1"></div>
        <div className="blur pay-blur-2"></div>
        <div className="programs-headers">
            <span className="stroke-text" >Start your</span>
            <span> exciting journey</span>
            <span className='stroke-text' > with us today!</span>
        </div>
        <div className="programs">
          {paymentData.map((program, index)=> (
            <div className="program" key={index}>
              {program.icon}
              <span>{program.name}</span>
              <span>${program.price}</span>

              <div className="features">
                {program.features.map((feature, index)=> (
                  <div className="feature" key={index}>
                    <img src={whiteTick} alt="tick icon" />
                    <span key={index}>{feature}</span>
                  </div>
                ))}
              </div>

              <div>
                <span>Learn About Extra Benefits -></span>
              </div>
              <button className='btn btn-s'>Sign Up Today</button>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Payment
