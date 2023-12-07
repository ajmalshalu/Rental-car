import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/login.css";
import Header from "../components/Header/Header";

const Login = () => {
  return (
    <body>
      <Header />
      <div id="outer">
        <div id="inner">
          <div id="headers">
            <h2>Sign In</h2>
          </div>
          <div id="body" >
            <div class="fld" id="frm">
              <form action="" method="POST" />
              <div class="input8" >
                <input id="email" name="email" type="Email" placeholder="email" required />
              </div>
              <div class="input8">
                <input id="pass1" name="password" type="password" placeholder="password" onchange="checkpass()" />
              </div>
              <div id="input9" class="buton">
                <button style={{ backgroundColor: 'rgb(20, 66, 218)', width: '165%', marginLeft: '-45px', height: '30px', border: 'none', color: 'white' }}>Sign in</button>
              </div>
              <div id="footer" style={{ marginTop: '20px' }}>
                <p><a href="" style={{ textDecoration: 'none', color: 'black' }}>Forget Password</a></p>
              </div>
            </div>
          </div>
          <hr />
          <div id="input10">
            <Link to="/signup" style={{ textDecoration: 'none' }}><button style={{ backgroundColor: 'rgb(8, 186, 61)', height: '30px', width: '100%', border: ' none', color: 'white' }}>Create New Account</button></Link>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Login