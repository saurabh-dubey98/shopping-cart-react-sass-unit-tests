import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import { data } from '../../data/data';
import { MainConatiner, BookImage, BookDetailContent, BookName, BookPrice, BookDescription, Image, Hr } from './BookDetails.styled';
import { Button } from '../../GlobalStyles';
import { addToCart } from '../../app/cart/cartSlice';

const BookDetails = () => {
    const { productId } = useParams();
    const [isInCart, setIsInCart] = useState(null);
    const inCart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { title, image, price, desc } = data.find(element => element.id == productId);

    const cartData = inCart.find(i => i.id == productId);

    useEffect(() => {
        if (cartData) { setIsInCart(true) }
    }, [])

    const addToCartHandler = () => {
        if (inCart.length > 0 && cartData) {
            console.log('in first if');
            return;
        } else if (inCart.length === 0) {
            console.log('in 0');
            setIsInCart(true);
            dispatch(addToCart({ id: productId, bookQty: 1 }));
        } else {
            console.log('in last else');
            setIsInCart(true);
            dispatch(addToCart({ id: productId, bookQty: 1 }));
        }
    }

    return <MainConatiner>
        <BookImage>
            <Image src={image} />
        </BookImage>
        <BookDetailContent>
            <BookName>
                {title}
            </BookName>
            <BookPrice>
                Rs. {price}
            </BookPrice>
            <Hr />
            <BookDescription>
                {desc}
            </BookDescription>
            <Button pd="10px 20px" fontSize="1rem" bg="#5C7AEA" color="#EEEEEE" onClick={addToCartHandler}>
                {isInCart ? <FaCheck /> : "Add to cart"}
            </Button>
        </BookDetailContent>
    </MainConatiner>
}

export default BookDetails
