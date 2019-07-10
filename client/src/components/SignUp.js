import React from 'react';

export default function SignUp(props) {
  console.log('hi', props)
  return <form onSubmit={props.onSubmit}>
      <h2 className='user-sign-up-header'>User Sign Up</h2>
      <div className='email'>
          <label>Email Address:</label>
          <input type="email" name="email" placeholder="Enter Email Address" />
      </div>
      <div className='password'>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter Password" />
      </div>
      <input type='submit' value='Submit' />
  </form>
}