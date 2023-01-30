import { Link } from 'react-router-dom';
import { HiArrowCircleRight } from 'react-icons/hi'
import { heroData } from '../../data/heroSectionData';
import { Footer } from '../../components';
import './Home.scss'
const Hero = () => {
    return <main className='home__container'>
        <div>
            <h1>
                {heroData.heading}
            </h1>
            <Link className='home__action--btn' to='/books'>
                {heroData.buttonText}
                <HiArrowCircleRight className='icon' />
            </Link>
        </div>
        <Footer />
    </main>
}

export default Hero
