import React from 'react';
import "./Subscribe.css"

const SubScribe = () => {
  return (
    <div className='subscribe'>
        <div className='subscribeRow'>
          <h2 className='subscribeTitle'>Save time, save money!</h2>
          <p className='subscribeDesc'>Sign up and we'll send the best dealsto you</p>
          <div className='subscribeInput'>
           <input type="email" placeholder='Your E-mail'/>
            <button>Subscribe</button>
          </div>
        </div>
    </div>
  )
}

export default SubScribe