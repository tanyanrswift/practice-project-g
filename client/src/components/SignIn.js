import React from 'react';

function SignIn() {
    return (
        <div>
            <h2 class='sign-in-header'>Sign In</h2>
            <form class='sign-in-form'>
                <div>
                    <label>Email Address:</label>
                    <input type='email' name='email' placeholder='Enter Email Address' />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password' name='password' placeholder='Enter Password' />
                </div>
                <input type='submit' name='Submit' />
            </form>
        </div>
    );
  }
  
  export default SignIn;