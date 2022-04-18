import { createWrapper } from 'next-redux-wrapper'
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { goodInBasketReducer } from './reducers/basketReducer'
import { marketGoodsReducer } from './reducers/goodsReducer'

export function makeStore() {
  return configureStore({
        reducer: {
          goodInBasket: goodInBasketReducer,
          marketGoods: marketGoodsReducer,
        },
        devTools: true,
    });
  }

export const store = makeStore()

export type RootStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<RootStore['getState']>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>

export const wrapper = createWrapper<RootStore>(makeStore);
