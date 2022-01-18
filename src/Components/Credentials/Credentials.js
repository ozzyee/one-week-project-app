import React from 'react';
import Button from '../button/Button.js';

function Credentials() {

    function uploadDetails() {
        console.log("details added!");
    }

    return (
        <div>
        <img src="https://www.schoolofcode.co.uk/static/logo-51c754388b198e5bbb0d08a971ebbfa2.png" alt="School of Code logo"></img>
        <h1>Welcome!</h1>
        <h2>Please enter your details</h2>
        <input placeholder='Name'></input>
        <input placeholder='Bootcamper ID'></input>
        <input placeholder='Cohort'></input>
        <Button handleClick={uploadDetails} text="Next"/>
        </div>
    )
}

export default Credentials
