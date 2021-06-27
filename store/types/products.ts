import { ProductType } from './../reducers/productsReducer';

export enum ProductsActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_TARGET_PRODUCT = 'SET_TARGET_PRODUCT'
}

type setProducts = {
    type: ProductsActionTypes.SET_PRODUCTS
    payload: Array<ProductType>
}

type setTargetProduct = {
    type: ProductsActionTypes.SET_TARGET_PRODUCT
    payload: ProductType
}

export type ProductsStateType = {
    products: Array<ProductType>,
    targetProduct: ProductType
}

export type ProductsActionCreatorTypes = 
    setProducts |
    setTargetProduct