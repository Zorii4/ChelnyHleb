import axios from "axios";
import { Dispatch } from "react";
import { CategoriesActionTypes, CategoriesDataAction } from "../../types/categories";

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoriesDataAction>) => {
        try {
            const response = await axios.get('http://localhost:4200/categories')
            dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR, payload:"Произошла ошибка при загрузке товаров"})
        }
    }
}
