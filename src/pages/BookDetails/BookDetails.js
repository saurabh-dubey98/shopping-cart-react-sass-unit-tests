import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaCheck } from 'react-icons/fa';
import { HiArrowCircleRight } from 'react-icons/hi';
import { data } from '../../data/data';
import { Button } from '../../GlobalStyles';
import { addToCart } from '../../app/cart/cartSlice';

import './BookDetails.scss'

const BookDetails = () => {
    const { productId } = useParams();
    const [isInCart, setIsInCart] = useState(null);
    const inCart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const goToCart = useNavigate()
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

    return <section className='bookDetails__container'>
        <div className='bookImage__container'>
            <img src={image} />
        </div>
        <div className='book__content'>
            <h2>
                {title}
            </h2>
            <h3>
                &#8377; {price}
            </h3>
            <hr />
            <p>
                {desc}
            </p>

            <div className='addToCart__button--container'>
                {/* <button onClick={addToCartHandler} disabled={isInCart} className='bookDetails__addToCart--btn'>
                    {isInCart ? <FaCheck /> : "Add to cart"}
                </button> */}
                {!isInCart && <button onClick={addToCartHandler} disabled={isInCart} className='bookDetails__addToCart--btn'>
                    Add to cart
                </button>}

                {isInCart && <button onClick={() => goToCart('/cart')} className='bookDetails__goToCart--btn'>Go to cart <HiArrowCircleRight className='icon' /></button>}
            </div>
        </div>
    </section>
}

export default BookDetails
