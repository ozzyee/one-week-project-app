import React from 'react';
import Button from '../button/Button.js';

function SignIn() {

    function handleSignIn(){
        console.log('You are signed in')
    }

    return (
        <div>
             <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="School of Code logo"></img>
            <h1>Welcome!</h1>
            <h2>Please sign in</h2>
            <input placeholder='Email' />
            <input placeholder='Password' />
            <Button handleClick={handleSignIn} text='Sign in' />
        </div>
    )
}

export default SignIn;
