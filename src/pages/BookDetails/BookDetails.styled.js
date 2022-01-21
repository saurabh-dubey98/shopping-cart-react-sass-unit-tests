import styled from 'styled-components';

export const MainConatiner = styled.main`
    display: grid;
    grid-template-columns: 30% 70%;
    margin: 2.5rem auto 0 auto;
    padding: 0 20px;
    max-width: 1200px;
    position: relative;
    gap: 1rem;
`
export const BookImage = styled.div`
    width: 100%;
    height: 500px;
`
export const Image = styled.img`
    height: 100%;
    object-fit: cover;
`
export const BookDetailContent = styled.div`

`
export const BookName = styled.h2`
    font-size: 1.7rem;
    text-transform: uppercase;
    font-weight: 500;
`
export const BookPrice = styled.h3`
    margin-bottom: 10px;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary};
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`
export const Hr = styled.hr`
    margin-bottom: 10px;
    background-color: lightgray;
    height: 1px;
    border: none
`
export const BookDescription = styled.p`
    font-weight: 300;
    margin-bottom: 10px;
    letter-spacing: 1px;
    line-height: 1.6;
`