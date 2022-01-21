import { CartItemContainer, CartItemImageContainer, ItemImage, CartItemNameAndQty, Name, Qty, Decrement, QtyDisplay, Increment, CartItemPrice } from './CartItem.styled';
import { FaPlus, FaMinus } from 'react-icons/fa';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { data } from '../../data/data';
import { increment, decrement, removeItem } from '../../app/cart/cartSlice';

const CartItem = ({ id, qty }) => {
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

    return <CartItemContainer>
        <CartItemImageContainer>
            <ItemImage src={image} />
        </CartItemImageContainer>
        <CartItemNameAndQty>
            <Name>
                {title}
            </Name>
            <Qty>
                <Decrement onClick={() => dispatch(decrement({ id, qty }))}>
                    <FaMinus />
                </Decrement>
                <QtyDisplay>
                    {cartData}
                </QtyDisplay>
                <Increment onClick={() => dispatch(increment({ id, qty }))}>
                    <FaPlus />
                </Increment>
            </Qty>
        </CartItemNameAndQty>
        <CartItemPrice>
            Rs. {price}
        </CartItemPrice>
    </CartItemContainer>
}

export default CartItem;