
import './SignUp.css'
import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'

const SignUp = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tey061b', 'template_rv40rgc', form.current, 
        'TJvT6mj_xKChiEMTg',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="signup" id="signup">
       <div className="left-sign">
         <div>
            <span className='stroke-text'>Time to sweat,</span>
         </div>
         <div>
            <span> smile and shine</span>
         </div>
         <div>
            <span className='stroke-text'> with us!</span>
         </div>


          
       </div>
       
       
       <div className="right-sign">
       <form ref={form} className="email-box" onSubmit={sendEmail}>
             <input type="email" name='user_email' placeholder='Enter your email'/>
             <button className='btn btn-sign'>Sign Up Now</button>
          </form>
         
         
       </div>
    </div>
  )
}

export default SignUp
