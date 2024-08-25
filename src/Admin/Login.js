import React from 'react'
import logo from '../Component/image/mob-logo 2.png'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <>
            <div className='mainContainer'>
                <div className='flexCol'><img src={logo} alt='logo' /><div className='cms'>cms</div></div>
                <div className='loginBox'>
                    <h5>Login to your account</h5>
                    <form>
                        <div className='inputbox'>
                            <h6>Email</h6>
                            <input type='email' className='bigbox ' placeholder='Email'></input>
                        </div>
                        <div className='inputbox mb-3'>
                            <h6>Password</h6>
                            <input type='password' className='bigbox ' placeholder='Password'></input>
                        </div>
                        <Link to='/forgotpassword'>Forget Password?</Link>
                        <button className='signup'>Login</button>
                    </form>
                </div>
                <h6>Don't have account! <Link to='/admin'> Create Account</Link></h6>
            </div>
        </>
    )
}

export default Login