import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => { state.push(action.payload) },
        increment: (state, action) => {
            state.forEach(book => {
                if (book.id == action.payload.id) {
                    book.bookQty = book.bookQty + 1;
                }
            })
        },
        decrement: (state, action) => {
            state.forEach(book => {
                if (book.id == action.payload.id) {
                    book.bookQty = book.bookQty - 1;
                }
            })
        },
        removeItem: (state, action) => {
            return state = state.filter(item => item.id != action.payload.id)
        }
    }
})

export const { addToCart, increment, decrement, removeItem } = cartSlice.actions;

export default cartSlice.reducer;

