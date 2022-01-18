import React from 'react'

function Button({ text, handleSignUp }) {
    return (
        <div>
            <button onClick={ handleSignUp }>{ text }</button>
        </div>
    )
}

export default Button
