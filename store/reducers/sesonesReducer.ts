import { SesonesActionTypes, SesonesBannerState, SesonesDataAction } from "../../types/sesones"

const initialState: SesonesBannerState = {
    sesonesBanner: [],
    error: null
}

export const sesonesReducer = (state = initialState, action: SesonesDataAction): SesonesBannerState  => {
    switch (action.type) {
        case SesonesActionTypes.FETCH_SESONESDATA_SUCCESS:
            return {error: null, sesonesBanner: action.payload}
        case SesonesActionTypes.FETCH_SESONESDATA_ERROR:
            return {...state, error: action.payload}
        default:
            return state
    }
}
