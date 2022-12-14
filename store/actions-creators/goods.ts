
import axios from "axios";
import { Dispatch } from "react";
import { GoodsAction, GoodsActionTypes } from "../../types/goods";

export const fetchGoods = () => {
    return async (dispatch: Dispatch<GoodsAction>) => {
        try {
            const response = await axios.get('http://localhost:4200/goods', {params: {
                _limit: 5,
            }})
            dispatch({type: GoodsActionTypes.FETCH_GOODS_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GoodsActionTypes.FETCH_GOODS_ERROR, payload:"Произошла ошибка при загрузке товаров"})
        }
    }
}

export const fetchGoodsFromCategory = (category: string) => {
    return async (dispatch: Dispatch<GoodsAction>) => {
        try {
            const response = await axios.get(`http://localhost:4200/goods?category=${category}`)
            
            dispatch({type: GoodsActionTypes.FETCH_GOOD_FROM_CATEGORY_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: GoodsActionTypes.FETCH_GOOD_FROM_CATEGORY_ERROR, payload:"Произошла ошибка при загрузке товаров"})
        }
    }
 }