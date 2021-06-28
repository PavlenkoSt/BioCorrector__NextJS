import { ProductType } from './../reducers/productsReducer'

export enum ProductsActionTypes {
    SET_PRODUCTS = 'SET_PRODUCTS',
}

type setProducts = {
    type: ProductsActionTypes.SET_PRODUCTS
    payload: Array<ProductType>
}

export type ProductsStateType = {
    products: Array<ProductType>,
}

export type ProductsActionCreatorTypes = 
    setProducts