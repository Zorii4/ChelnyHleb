import { GoodsAction, GoodsActionTypes, GoodsState } from "../../types/goods"

const initialState: GoodsState = {
    goods: [],
    error: null
}

export const goodsReducer = (state = initialState, action: GoodsAction): GoodsState  => {
    switch (action.type) {
        case GoodsActionTypes.FETCH_GOODS_SUCCESS:
            return {error: null, goods: action.payload}
        case GoodsActionTypes.FETCH_GOODS_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
