import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { heroData } from '../../data/heroSectionData';

export const HeroSection = styled.section`
    position: relative;
    width: 100%;
    background-image: url(${heroData.bg_image});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    flex: 1;
    padding-top: 3.2rem;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
    }
`
export const HeroContainer = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 8rem auto 0 auto;
    padding: 0 30px;
`
export const HeroHeading = styled.h1`
    color: ${({ theme }) => theme.colors.bright};
    font-size: 4rem;
    text-transform: uppercase;
    margin-bottom: 1.3rem;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    letter-spacing: 2px;
    position: relative;

    @media screen and (max-width: 760px) {
        text-align: center;
        font-size: 3rem;
    }
`
export const HeroActionButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.very_dark};
    font-size: 2rem;
    font-weight: 600;
    padding: 10px 20px;
    text-transform: uppercase;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-out;
    display: block;
    width: max-content;
    position: relative;
    &:hover {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
        letter-spacing: 0.2px;
    }

    @media screen and (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
    }

    @media screen and (max-width: 450px) {
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
    }

    @media screen and (max-width: 370px) {
        font-size: 1.8rem
    }
    @media screen and (max-width: 320px) {
        font-size: 1.5rem
    }
`