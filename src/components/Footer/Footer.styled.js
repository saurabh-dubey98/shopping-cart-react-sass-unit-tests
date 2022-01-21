import styled from 'styled-components';

export const FooterSection = styled.footer`
    background-color: ${({ theme }) => theme.colors.very_dark};
    color: ${({ theme }) => theme.colors.bright};
    font-weight: 600;
    font-size: 0.9rem;
    position: relative;
    bottom: 0;
    text-align: center;
    padding: 5px 0;
    width: 100%;
    /* display: none; */
    margin-top: auto;
    z-index: -1;
`

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.primary};
`