import axios from "axios";
import { Dispatch } from "react";
import { SesonesActionTypes, SesonesDataAction } from "../../types/sesones";

export const fetchSesonesBanner = () => {
    return async (dispatch: Dispatch<SesonesDataAction>) => {
        try {
            const response = await axios.get('http://localhost:4200/sesonesBanner')
            dispatch({type: SesonesActionTypes.FETCH_SESONESDATA_SUCCESS, payload: response.data})
        } catch (error) {
            dispatch({type: SesonesActionTypes.FETCH_SESONESDATA_ERROR, payload:"Произошла ошибка при загрузке товаров"})
        }
    }
}
