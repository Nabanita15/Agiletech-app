import React from 'react'
import logo from '../Component/image/mob-logo 2.png'
import { Link } from 'react-router-dom'
const ForgotPassword = () => {
    return (
        <>
            <div className='mainContainer'>
                <div className='flexCol'><img src={logo} alt='logo' /><div className='cms'>cms</div></div>
                <div className='loginBox'>
                    <h5>Reset password...</h5>
                    <h6>Enter your email address and we will send you a OTP to Reset your password</h6>
                    <form>
                        <div className='inputbox'>
                            <h6>Email</h6>
                            <input type='email' className='bigbox ' placeholder='Email'></input>
                        </div>
                        <button className='signup'>Submit</button>
                    </form>
                </div>
                <h6>Don’t have account! <Link to='/admin'> Create Account</Link></h6>
            </div>
        </>
    )
}

export default ForgotPassword