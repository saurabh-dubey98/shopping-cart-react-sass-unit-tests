import React from 'react'
import { Link } from 'react-router-dom';
import { CardContainer, ImageContainer, BookImage, BookInfo, BookName, BookPrice } from './Card.styled';

const Card = ({ book }) => {
    const { image, title, price, id } = book;

    return (
        <Link to={`${id}`}>
            <CardContainer>
                <ImageContainer>
                    <BookImage src={image} />
                </ImageContainer>
                <BookInfo>
                    <BookName>{title}</BookName>
                    <BookPrice>Rs. {price}</BookPrice>
                </BookInfo>
            </CardContainer>
        </Link>
    )
}

export default Card
