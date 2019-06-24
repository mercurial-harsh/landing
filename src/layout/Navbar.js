import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'

const Navbar =() => {
    return (
        <nav className="nav-wrapper darken-3 centerIcon"> 
            <div className="container centerIcon">
                <Link to='/' className="brand-logo centerIcon"> Xe-Bid </Link>
            </div>
        </nav>
    )
}

export default Navbar;