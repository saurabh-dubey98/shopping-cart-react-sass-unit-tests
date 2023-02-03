import { FaPlus, FaMinus } from 'react-icons/fa';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data/data';
import { increment, decrement, removeItem } from '../../app/cart/cartSlice';

import './CartItem.scss'

const CartItem = React.memo(({ id, qty }) => {
    const { title, price, image } = data.find(item => item.id == id);
    const cartData = useSelector(state => {
        const qty = state.cart.find(i => i.id == id);
        return qty.bookQty;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        if (cartData === 0) {
            dispatch(removeItem({ id }));
        }
    }, [cartData])

    return <article className='cart-item-container'>
        <div className='cartItem__image--container'>
            <img className='' src={image} />
        </div>
        <div className='cartItem__name-and-qty'>
            <h2>
                {title}
            </h2>
            <div className='qty'>
                <button className='decrement' onClick={() => dispatch(decrement({ id, qty }))}>
                    <FaMinus />
                </button>
                <span className='qty-display'>
                    {cartData}
                </span>
                <button className='increment' onClick={() => dispatch(increment({ id, qty }))}>
                    <FaPlus />
                </button>
            </div>
        </div>
        <h2 className='item__price'>
            Rs. {price}
        </h2>
    </article>
})

export default CartItem;