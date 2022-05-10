import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className='nav'>
                <ul className='nav-menu'>
                    <li><NavLink to="/home" data-hover='Home'>Home</NavLink></li>
                    <li><NavLink to="/cat/Bollywood" data-hover='Bollywood'>Bollywood</NavLink></li>
                    <li><NavLink to="/cat/Technology" data-hover='Technology'>Technology</NavLink></li>
                    <li><NavLink to="/cat/Hollywood" data-hover='Hollywood' >Hollywood</NavLink></li>
                    <li><NavLink to="/cat/Travel" data-hover='Travel'>Travel</NavLink></li>
                    <li><NavLink to="/cat/Food" data-hover='Food'>Food</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
