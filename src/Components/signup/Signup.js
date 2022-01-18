import React from 'react'
import Button from '../button/Button';

function SignUp () {

    const handleSignUp = () => {
        console.log('It works!');
    }

    return (
        <div>
            <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="School of Code logo"></img>
            <h1>Welcome!</h1>
            <h2>Please sign up!</h2>
            <input placeholder='Please enter your email'></input>
            <input placeholder='Please enter your password'></input>
            <input placeholder='Please confirm your password'></input>
            <Button handleClick={handleSignUp}  text="Sign Up Now"/>
            <img src="https://www.schoolofcode.co.uk/static/planet_soc-936d90fa66f241adff76225618c37d0f.png" alt="School of Code Chris Planet"></img>
            </div>
    )
}

export default SignUp;

