import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
    max-width: 800px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); */
    margin: 20px auto 20px auto;
`
export const CartItems = styled.div`
    flex: 1;
`
export const TotalAmount = styled.h4`
    font-size: 1.3rem;
    font-weight: 400;
    margin-bottom: 20px;
`
export const Span = styled.span`
    font-weight: 800;
    margin-left: 5px;
    color: ${({ theme }) => theme.colors.less_dark};
`

export const CheckOutButton = styled(Link)`
    border:none;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 10px 8px 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.bright};
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-out;

    &:hover {
        color: ${({ theme }) => theme.colors.very_dark};
        background-color: ${({ theme }) => theme.colors.bright};
        letter-spacing: 1.5px;
    }
`
export const Checkout = styled.div`
    margin-top: 10px;
    width: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const NoItems = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
`
export const GoShop = styled(Link)`
    margin-top: 15px;
    border:none;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 10px 8px 10px;
    border-radius: 10px;
    color: ${({ theme }) => theme.colors.bright};
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all 150ms ease-out;

    &:hover {
        color: ${({ theme }) => theme.colors.very_dark};
        background-color: ${({ theme }) => theme.colors.bright};
        letter-spacing: 1.5px;
    }
`