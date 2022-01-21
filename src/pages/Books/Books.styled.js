import styled from "styled-components";

export const BooksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 20px;
    margin: 2.5rem 0;
    padding: 0 2rem;

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 680px) {
        grid-template-columns: repeat(1, auto);
    }
`