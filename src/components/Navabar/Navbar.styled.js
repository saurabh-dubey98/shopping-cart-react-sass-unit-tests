import styled from 'styled-components';
import { FaBook, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
    width: 100%;
    position: sticky;
    top: 0;
    height: 3.5rem;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.very_dark};
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    z-index: 1;
`

export const NavContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
    overflow: hidden;
    @media screen and (max-width: 500px) {
        margin: 0;
    }
`

export const NavLogo = styled(Link)`
    display: flex;
    align-items: center;
    height: 100%;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.bright};
    font-size: 2rem;
    font-weight: 700;


    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
        font-weight: 600;
    }
`
export const NavIcon = styled(FaBook)`
    margin-right: 0.5rem;
`

export const MobileMenuIcons = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
        display: flex;
        color: ${({ theme }) => theme.colors.bright};
        cursor: pointer;
        font-size: 1.8rem;
    }
`

export const Menu = styled.ul`
    height: 100%;
    display: flex;

    @media screen and (max-width: 500px) {
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: ${({ toggle }) => (toggle ? '0' : '-100%')};
        flex-direction: column;
        background-color: ${({ theme }) => theme.colors.very_dark};
        height: 100vh;
        width: 100%;
        transition: all 0.3s ease-in-out;
        z-index: -1;
    }
`

export const NavItem = styled.li`
    display: flex;
    align-items: center;
    margin-left: 2rem;
    transition: 0.2s ease-in-out;
    &:hover {
        border-bottom: 2px solid ${({ theme }) => theme.colors.bright};
    }

    @media screen and (max-width: 500px) {
        &:hover {
            border-bottom: none;
        }

        margin: 2rem 0;
    }
`

export const NavLink = styled(Link)`
    color: ${({ theme }) => theme.colors.bright};
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 100% 0;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    &:hover {
        opacity: 0.9;
        letter-spacing: 4px;
    }

    @media screen and (max-width: 500px) {
        padding: 0 0;
    }
`

export const CartIcon = styled(FaShoppingCart)`
    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
`