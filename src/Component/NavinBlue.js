import React from 'react'
import logo2 from '../Component/image/mob-logo 2.png'
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import Service from './Service';
import Language from './Language';
const NavinBlue = () => {
    return (
        <> <div className='Navcontainer background '>
            <div className="container pt-2 ">
                <nav className="navbar navbar-expand-lg navbackground ">
                    <div className="container-fluid">
                        <img src={logo2} alt='' width="148px" height="33px" />
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav  mx-auto ">
                                <li className="nav-item">
                                    <Link to='/' className="nav-link myfont1 pt-1 ">
                                        <HomeIcon />
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <div className="dropdown  dropdown-toggle nav-link myfont1 pt-2 "
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        service
                                        <ul className="dropdown-menu" style={{
                                            top: '-20px',
                                            left: '-550px',
                                            width: '100vw'
                                        }}>
                                            <Service />
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to='/contactus' className="nav-link myfont1">
                                        about comany
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link myfont1">
                                        current opening
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/talent' className="nav-link myfont1">
                                        talent list
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link myfont1 ">
                                        contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <ul className="navbar-nav ml-5">
                        <li className="nav-item">
                            <div className="dropdown nav-link myfont1 "
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <LanguageIcon />
                                <ul className="dropdown-menu" style={{
                                    top: '-20px',
                                    left: '-1352px',
                                    width: '100vw',
                                }}>
                                    <Language />
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </>
    )
}

export default NavinBlue