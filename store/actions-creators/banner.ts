import axios from "axios"
import { Dispatch } from "react"
import { BannerDataAction, BannerDataActionTypes } from "../../types/banner"


export const fetchBannerData = () => {
    return async (dispatch: Dispatch<BannerDataAction>) => {
        try {
            const res = await axios.get('http://localhost:4200/banner')
            dispatch({type: BannerDataActionTypes.FETCH_BANNERDATA_SUCCESS, payload: res.data})
        } catch (error) {
            dispatch({type: BannerDataActionTypes.FETCH_BANNERDATA_ERROR, payload:"Произошла ошибка при загрузке данных"})
        }
    }
}