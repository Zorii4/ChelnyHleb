import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    goodInBasket: [],
    quantity: 0,
    totalAmount: 0
}

const goodInBasketSlice = createSlice ({
    name: "goodInBasket",
    initialState,
    reducers: {
        addToBasket(state, action) {
            state.goodInBasket.push(action.payload)
        }
    }
})

export const { addToBasket } = goodInBasketSlice.actions

export default goodInBasketSlice.reducer