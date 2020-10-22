import React from 'react'
import '../Login.css'

function Login() {
    return (
        <div className="login">
            {/*  */}
            <h1>I am Login Page</h1>
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = "Spotify Logo"/>
            <button>LOGIN WITH SPOTIFY</button>
            <Login />
        </div>
    )
}

export default Login