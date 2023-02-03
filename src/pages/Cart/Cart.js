import { useEffect, useMemo } from 'react'
import { HiArrowCircleLeft } from 'react-icons/hi'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CartItem } from "../../components";
import { setTotalAmount } from '../../app/cart/totalAmountSlice';

import { data } from '../../data/data';
import './Cart.scss'

const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const totalAmount = useSelector(state => state.total);
    const dispatch = useDispatch();
    // let total = 0;
    const total = useMemo(() => {
        let amount = 0
        cartItems.forEach(i => {
            data.forEach(j => {
                if (i.id == j.id) {
                    amount = amount + (i.bookQty * j.price)
                }
            })
        })
        return amount
    }, [data, cartItems])

    useEffect(() => {
        dispatch(setTotalAmount({ total: total }))
    }, [total])

    if (cartItems.length === 0) {
        return <div className='no__items'>:( No item
            <Link className='go__back--shopBtn' to='/books'><HiArrowCircleLeft /> Go back Shopping</Link>
        </div>
    }

    return <div className='cart__container'>
        <div className='cart__items'>
            {cartItems.map(data => <CartItem key={data.id} id={data.id} qty={data.bookQty} />)}
        </div>
        <div className='checkout'>
            <h4>
                Total:
                <span>Rs.{totalAmount}</span>
            </h4>
            <button className='checkout__btn' to="/checkout">
                Checkout
            </button>
        </div>
    </div>
}

export default Cart
