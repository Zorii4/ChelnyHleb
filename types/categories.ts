
export interface Categories {
    id: number | string
    title: string
    background: string
    url: string
}

export interface CategoriesState {
    categories: Categories[]
    error: null | string
}

export enum CategoriesActionTypes {
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_ERROR = "FETCH_CATEGORIES_ERROR",
}

interface FetchCategoriesSuccess {
    type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS
    payload: Categories[]
}

interface FetchCategoriesError {
    type: CategoriesActionTypes.FETCH_CATEGORIES_ERROR
    payload: string
}

export type CategoriesDataAction = FetchCategoriesSuccess | FetchCategoriesError
