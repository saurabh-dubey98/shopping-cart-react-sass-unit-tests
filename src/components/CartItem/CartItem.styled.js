import styled from "styled-components";


export const CartItemContainer = styled.article`
    max-width: 750px;
    height: 150px;
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) ;
    overflow: hidden;
    display: flex;
`
export const CartItemImageContainer = styled.div`
    height: 100%;
    padding: 5px;
    margin-right: 10px;
`
export const ItemImage = styled.img`
    height: 100%;
    object-fit: cover;
`
export const CartItemNameAndQty = styled.div`
    flex: 1;
`
export const Name = styled.h2`
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 1.4rem;

    @media screen and (max-width: 400px) {
        font-size: 1.3rem;
    }
`
export const Qty = styled.div`

    @media screen and (max-width: 300px) {
        display: flex;
        flex-direction: column-reverse;
        /* justify-content: center; */
        align-items: center;
    }    
`
export const Decrement = styled.button`
    border: none;
    background-color: #FF2442;
    padding: 6px 8px 3px 8px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 150ms ease-out;

    &:hover {
        opacity: 0.8;
    }
`
export const QtyDisplay = styled.span`
    margin: 0 10px;
    font-weight: 600;
    font-size: 1rem;
`
export const Increment = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 6px 8px 3px 8px;
    border-radius: 5px;
    color: white;
    cursor: pointer;  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); 
    transition: all 150ms ease-out;

    &:hover {
        opacity: 0.8;
    } 
`
export const CartItemPrice = styled.h2`
    margin-right: 12px;
    font-size: 1.2rem;
    font-weight: 500;
`