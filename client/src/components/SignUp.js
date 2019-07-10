import React from 'react';

function SignUp() {
    return (
      <form>
        <h2 class='user-sign-up-header'>Sign Up</h2>
        <div class='email'>
            <label>Email Address:</label>
            <input type="email" name="email" placeholder="Enter Email Address" />
        </div>
        <div class='password'>
            <label>Password:</label>
            <input type="password" name="password" placeholder="Enter Password" />
        </div>
        <input type='submit' value='Submit' />
      </form>
    )
  }
  
  export default SignUp;