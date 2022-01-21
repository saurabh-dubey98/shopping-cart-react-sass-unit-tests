import React, { useState } from 'react'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'
import { Nav, NavContainer, NavLogo, NavIcon, MobileMenuIcons, Menu, NavItem, NavLink, CartIcon } from './Navbar.styled'

const Navbar = () => {
    const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

    const mobileMenuOpenHandler = () => {
        setMobileMenuToggle(!mobileMenuToggle);
    }

    return (
        <Nav>
            <NavContainer>

                <NavLogo to="/" onClick={() => setMobileMenuToggle(false)}>
                    <NavIcon />
                    BOOKS
                </NavLogo>

                <MobileMenuIcons onClick={mobileMenuOpenHandler}>
                    {mobileMenuToggle ? <FaTimes /> : <FaBars />}
                </MobileMenuIcons>

                <Menu onClick={mobileMenuOpenHandler} toggle={mobileMenuToggle}>
                    <NavItem>
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/books'>
                            Books
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to='/cart'>
                            <CartIcon />
                            Cart
                        </NavLink>
                    </NavItem>
                </Menu>
            </NavContainer>
        </Nav >
    )
}

export default Navbar
