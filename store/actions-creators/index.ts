
import * as GoodsActionCreators from '../actions-creators/goods'
import * as BannerActionCreators from '../actions-creators/banner'
import * as SesonesActionCreators from '../actions-creators/sesones'
import * as CategoriesActionCreators from '../actions-creators/categories'


export default {
    ...GoodsActionCreators,
    ...BannerActionCreators,
    ...SesonesActionCreators,
    ...CategoriesActionCreators
}