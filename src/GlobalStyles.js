import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

    *,
    html,
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
    }
`

export const Button = styled.button`
    border: none;
    border-radius: 1.4rem;
    padding: ${({ pd }) => pd};
    margin: 5px;
    background-color: ${({ bg }) => bg};
    color: ${({ color }) => color};
    transition: all 0.3s cubic-bezier(0.215, 0.610, 0.355, 1);
    cursor: pointer;
    font-size: ${({ fontSize }) => fontSize};
    font-weight: 600;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
    text-transform: uppercase;
    letter-spacing: 2px;
    &:hover {
        color: ${({ theme }) => theme.colors.dark};
        background-color: ${({ theme }) => theme.colors.bright};
    }
`
export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* position: relative; */
`

export default GlobalStyles;
