import React, { useEffect } from 'react'
import { CartItem } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { setTotalAmount } from '../../app/cart/totalAmountSlice';
import { CartContainer, CartItems, TotalAmount, CheckOutButton, Checkout, Span, NoItems, GoShop } from './Cart.styled';
import { data } from '../../data/data';
const Cart = () => {
    const cartItems = useSelector(state => state.cart);
    const totalAmount = useSelector(state => state.total);
    const dispatch = useDispatch();
    let total = 0;
    cartItems.forEach(i => {
        data.forEach(j => {
            if (i.id == j.id) {
                total = total + (i.bookQty * j.price)
            }
        })
    })
    console.log(cartItems);
    useEffect(() => {
        dispatch(setTotalAmount({ total: total }))
    }, [total])

    if (cartItems.length === 0) {
        return <NoItems>:( No item
            <GoShop to='/books'>Go back Shopping</GoShop>
        </NoItems>
    }

    return <CartContainer>

        <CartItems>
            {cartItems.map(data => <CartItem key={data.id} id={data.id} qty={data.bookQty} />)}
        </CartItems>
        <Checkout>
            <TotalAmount>
                Total:
                <Span>Rs.{totalAmount}</Span>
            </TotalAmount>
            <CheckOutButton to="/checkout">
                Checkout
            </CheckOutButton>
        </Checkout>
    </CartContainer>
}

export default Cart
