import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaBook } from 'react-icons/fa'

import './Navbar.scss'

const Navbar = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const mobileMenuOpenHandler = () => {
        setMobileMenuToggle(!mobileMenuToggle);
    }

    return (
        <nav className='navbar'>
            <div className='navbar__container'>

                <Link className='navbar__logo' to="/" onClick={() => setMobileMenuToggle(false)}>
                    <FaBook className='icon' />
                    Books
                </Link>

                <div className='navbar__menu--icons' onClick={mobileMenuOpenHandler}>
                    {mobileMenuToggle ? <FaTimes /> : <FaBars />}
                </div>

                <ul onClick={mobileMenuOpenHandler} toggle={mobileMenuToggle} className={`navbar__links--container ${mobileMenuToggle ? 'mobile__nav--active' : ''}`}>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'nav__link--active' : 'nav__link--deactivate'} to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'nav__link--active' : 'nav__link--deactivate'} to='/books'>
                            Books
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => isActive ? 'nav__link--active' : 'nav__link--deactivate'} to='/cart'>
                            <FaShoppingCart className='icon' />
                            Cart
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
