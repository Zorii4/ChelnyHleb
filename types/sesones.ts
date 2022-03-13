
export interface SesonesBanner {
    id: number | string
    title: string
    background: string
    description: string
}

export interface SesonesBannerState {
    sesonesBanner: SesonesBanner[]
    error: null | string
}

export enum SesonesActionTypes {
    FETCH_SESONESDATA_SUCCESS = "FETCH_SESONESDATA_SUCCESS",
    FETCH_SESONESDATA_ERROR = "FETCH_SESONESDATA_ERROR",
}

interface FetchSesonesSuccess {
    type: SesonesActionTypes.FETCH_SESONESDATA_SUCCESS
    payload: SesonesBanner[]
}

interface FetchSesonesError {
    type: SesonesActionTypes.FETCH_SESONESDATA_ERROR
    payload: string
}

export type SesonesDataAction = FetchSesonesSuccess | FetchSesonesError