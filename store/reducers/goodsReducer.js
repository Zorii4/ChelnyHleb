import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import { fetchAllGoods } from '../../FAKE_API/goods'

const initialState = {
    goods: fetchAllGoods(),
}

 export const marketGoods = createSlice ({
    name:"goodsInMarked",
    initialState,
    reducers: {
        addFavorities(state, action) {
            const newId = action.payload.id
            let changedGood = state.goods.find((item) => item.id === newId)    
            changedGood.like = !changedGood.like
            return state
        },
        
        fetchAllGoods(state) {
            return state
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

export const { addFavorities } = marketGoods.actions

export const marketGoodsReducer = marketGoods.reducer