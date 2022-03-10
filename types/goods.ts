
export interface Goods {
    id: number | string
    title: string
    rate: number
    oldprice: number
    newprice: number
    image: string
    discount: number
    like: boolean
}

export interface GoodsState {
    goods: Goods[]
    error: null | string
}

export enum GoodsActionTypes {
    FETCH_GOODS_SUCCESS = "FETCH_GOODS_SUCCESS",
    FETCH_GOODS_ERROR = "FETCH_GOODS_ERROR",
}

interface FetchGoodsSuccess {
    type: GoodsActionTypes.FETCH_GOODS_SUCCESS
    payload: Goods[]
}

interface FetchGoodsError {
    type: GoodsActionTypes.FETCH_GOODS_ERROR
    payload: string
}

export type GoodsAction = FetchGoodsSuccess | FetchGoodsError