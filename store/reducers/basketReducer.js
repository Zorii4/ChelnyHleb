import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    goodInBasket: [],
    totalQuantity: 0,
    totalAmount: 0
}

export const goodInBasketSlice = createSlice ({
    name: "goodInBasket",
    initialState,
    reducers: {
        addToBasket(state, action) {
            const itemIndex = state.goodInBasket.findIndex ((item) => item.id === action.payload.id)
            if(itemIndex >= 0) {
                state.goodInBasket[itemIndex].quantity += 1
            } else {
                const tempGood = { ...action.payload, quantity: 1 }
                state.goodInBasket.push(tempGood)
            }       
        }
    },
    extraReducers: {
        [HYDRATE]: (state, action) => {
            console.log('HYDRATE', state, action.payload);
            return {
                ...state,
                ...action.payload.subject,
            };
        },
    },
})

export const { addToBasket } = goodInBasketSlice.actions

export const goodInBasketReducer = goodInBasketSlice.reducer