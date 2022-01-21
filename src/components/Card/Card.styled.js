import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 300px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-out;
    cursor: pointer;
    justify-self: center;
    background-color: #EAEAEA;
    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    }
`
export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 20px 0 20px;
    width: 100%;
    height: 400px;
    /* overflow: hidden; */
`
export const BookImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const BookInfo = styled.div`
    text-align: center;
`

export const BookName = styled.h2`
    font-size: 1rem;
    margin-top: 10px;
`
export const BookPrice = styled.span`
    display: block;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.primary};
`
