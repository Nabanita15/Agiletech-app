import React from 'react'
import Nav from './Nav'
import { Outlet, useLocation } from 'react-router-dom'
import NavinBlue from './NavinBlue';

const Layout = () => {

    const location = useLocation();
    console.log(location);
    const isFocusAreaRoute = location.pathname === '/focusarea';
    return (
        <>
            {isFocusAreaRoute ? <NavinBlue /> : <Nav />}
            <Outlet />
        </>
    )
}

export default Layout