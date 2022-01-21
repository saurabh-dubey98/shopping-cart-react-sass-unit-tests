import React from 'react';
import { HeroSection, HeroContainer, HeroHeading, HeroActionButton } from './Hero.styled';
import { heroData } from '../../data/heroSectionData';

const Hero = () => {
    return <HeroSection>
        <HeroContainer>
            <HeroHeading>
                {heroData.heading}
            </HeroHeading>
            <HeroActionButton to='/books'>
                {heroData.buttonText}
            </HeroActionButton>
        </HeroContainer>
    </HeroSection>
}

export default Hero
