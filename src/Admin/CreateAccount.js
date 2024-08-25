import React from 'react'
import logo from '../Component/image/mob-logo 2.png'
import { Link } from 'react-router-dom'
function CreateAccount() {
    return (
        <>
            <div className='mainContainer'>
                <div className='flexCol'><img src={logo} alt='logo' /><div className='cms'>cms</div></div>
                <div className='createBox'>
                    <h5>Create account</h5>
                    <form>
                        <div className='row'>
                            <div className='input'>
                                <h6>Name</h6>
                                <input type='text' className='textBox' placeholder='Full name'></input>
                            </div>
                            <div className='input'>
                                <h6>Email</h6>
                                <input type='text' className='textBox' placeholder='Email Address'></input>
                            </div>
                        </div>

                        <div className='inputbox'>
                            <h6>Official UID</h6>
                            <input type='text' className='bigbox ' placeholder='Id'></input>
                        </div>
                        <div className='inputbox'>
                            <h6>Password</h6>
                            <input type='password' className='bigbox ' placeholder='Password'></input>
                        </div>
                        <div className='inputbox'>
                            <h6>Confirm Password</h6>
                            <input type='password' className='bigbox ' placeholder='Password'></input>
                        </div>
                        <button className='signup'>signup</button>
                    </form>
                </div>
                <h6>Already have account! <Link to='/login'> Log In</Link></h6>
            </div>
        </>
    )
}

export default CreateAccount