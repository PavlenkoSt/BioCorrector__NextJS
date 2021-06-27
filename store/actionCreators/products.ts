import { ProductsActionTypes } from './../types/products'
import { ProductType } from './../reducers/productsReducer'

const productsActions = {
    setProductsSuccess: (payload: Array<ProductType>) => ({ type: ProductsActionTypes.SET_PRODUCTS, payload }),
    setTargetProductSuccess: (payload: ProductType) => ({ type: ProductsActionTypes.SET_TARGET_PRODUCT, payload }),
}

export default productsActions