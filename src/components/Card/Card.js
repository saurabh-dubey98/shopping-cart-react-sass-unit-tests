import React from 'react'
import { Link } from 'react-router-dom';
import './Card.scss'

const Card = ({ book }) => {
    const { image, title, price, id } = book;

    return (
        <Link to={`${id}`}>
            <div className='card__container'>
                <div className='card__image--container'>
                    <img src={image} />
                </div>
                <div className='card__book--info'>
                    <h2>{title}</h2>
                    <span>&#8377; {price}</span>
                </div>
            </div>
        </Link>
    )
}

export default Card
