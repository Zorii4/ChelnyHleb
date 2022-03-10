
export interface BannerData {
    id: number | string
    title: string
    subtitle: string
    description: string
    oldprice: number
    newprice: number
    discount: number
    image: string
    duration: string
}

export interface BannerDataState {
    bannerData: BannerData[]
    error: null | string
}

export enum BannerDataActionTypes {
    FETCH_BANNERDATA_SUCCESS = "FETCH_BANNERDATA_SUCCESS",
    FETCH_BANNERDATA_ERROR = "FETCH_BANNERDATA_ERROR",
}

interface FetchBannerDataSuccess {
    type: BannerDataActionTypes.FETCH_BANNERDATA_SUCCESS
    payload: BannerData[]
}

interface FetchBannerDataError {
    type: BannerDataActionTypes.FETCH_BANNERDATA_ERROR
    payload: string
}

export type BannerDataAction = FetchBannerDataSuccess | FetchBannerDataError