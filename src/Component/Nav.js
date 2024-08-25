import React, { useState } from 'react'
import logo from '../Component/image/logo.png';
import logo1 from '../Component/image/mob-logo 2.png'
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Service from './Service';
import Language from './Language';
const Nav = () => {
  const [navbar, changeNavbar] = useState(false)
  const changebackground = () => {
    if (window.scrollY >= 200) {
      console.log("object");
      changeNavbar(true);
    } else {
      changeNavbar(false)
    }
  }
  useEffect(() => {
    // console.log("Event listener added");
    window.addEventListener('scroll', changebackground);
    return () => {
      window.removeEventListener('scroll', changebackground);
    };
  }, [])
  const logoUse = navbar ? logo1 : logo;


  return (
    <>
      <div className={`Navcontainer fixed-top  pt-2  ${navbar ? 'background' : 'nobackground'}`}>
        <div className='container'>
          <nav className='navbar navbar-expand-lg '>
            <div className="container-fluid">
              <img src={logoUse} alt='' width="148px" height="33px" />
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
                <ul className="navbar-nav  mx-auto">
                  <li className="nav-item">
                    <Link to="/" className={`nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}>
                      <HomeIcon />
                    </Link>
                  </li>

                  <li className="nav-item ">
                    <div className={`dropdown  dropdown-toggle nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}
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
                    <Link to='/aboutus' className={`nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}>
                      about comany
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className={`nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}>
                      current opening
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/talent' className={`nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}>
                      talent list
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contactus" className={`nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}>
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
            <ul className="navbar-nav ml-5">
              <li className="nav-item">
                <div className={`dropdown   nav-link pt-1 ${navbar ? 'myfont1' : 'myfont'}`}
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

export default Nav