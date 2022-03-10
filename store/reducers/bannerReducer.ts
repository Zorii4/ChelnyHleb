import { BannerDataAction, BannerDataActionTypes, BannerDataState } from "../../types/banner";


const initialState: BannerDataState = {
    bannerData: [],
    error: null
}

export const bannerReducer = (state = initialState, action: BannerDataAction): BannerDataState => {
    switch (action.type) {
        case BannerDataActionTypes.FETCH_BANNERDATA_SUCCESS:
            return {error: null, bannerData: action.payload}
        case BannerDataActionTypes.FETCH_BANNERDATA_ERROR:
            return {...state, error: action.payload}      
        default:
            return state
    }
}