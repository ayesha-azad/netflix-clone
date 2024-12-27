import React, { useState } from 'react'
import "./EmailSub.css"
import { ImCross } from "react-icons/im";

const EmailSub = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if(!value){
      setError("Email is required.")
    }
    else if(!validateEmail(value)){
      setError("Please enter a valid email address.")
    }
    else{
      setError('');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsTouched(true);
    if(!email){
      setError("Email is required.")
    }
    else if(!validateEmail(email)){
      setError("Please enter a valid email address.")
    }
    else{
      setError('');
    }
  }
  
  const handleBlur = () => {
    setIsTouched(true);
    if(!email){
      setError("Email is required.")
    }
    else if(!validateEmail(email)){
      setError("Please enter a valid email address.")
    }
    else{
      setError('');
    }
  }

  return (
    <div className='email-data'>

      <p className='data'>
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <form action="" onSubmit={handleSubmit}>
        
        <div className="input-container">
          <input type="text" className={`email-input ${error && isTouched ? 'input-error' : ''}`} value={email} id='email-address' onChange={handleChange} onBlur={handleBlur}/>
          <label for="email-address">Email address</label>

          {isTouched && error && (<p className='error-msg'>

              <div className="encircle-icon">
                <ImCross size={7}/>
              </div>

              {error}
              </p>)}
              
        </div>

        
      
        <button type='submit' className='get-started'>
        Get Started 

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="ChevronRightStandard" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path>
        </svg>
        
        </button>
        
      </form>
      
    </div>
  )
}

export default EmailSub
