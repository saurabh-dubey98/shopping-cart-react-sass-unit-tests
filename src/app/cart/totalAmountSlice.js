import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const totalAmountSlice = createSlice({
    name: 'totalAmount',
    initialState,
    reducers: {
        setTotalAmount: (state, action) => {
            return state = action.payload.total
        },
    }
})

export const { setTotalAmount } = totalAmountSlice.actions;

export default totalAmountSlice.reducer;