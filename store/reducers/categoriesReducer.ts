import { CategoriesActionTypes, CategoriesDataAction, CategoriesState } from "../../types/categories"


const initialState: CategoriesState = {
    categories: [],
    error: null
}

export const categoriesReducer = (state = initialState, action: CategoriesDataAction): CategoriesState => {
    switch (action.type) {
        case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {error: null, categories: action.payload}
        case CategoriesActionTypes.FETCH_CATEGORIES_ERROR:
            return {...state, error: action.payload}      
        default:
            return state
    }
}