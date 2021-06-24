import { ProductType } from "../reducers/productsReducer"

export enum CustomerActionTypes {
    SET_PRODUCT_COUNT = 'SET_PRODUCT_COUNT',
    SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
    SET_ACTIVE_PRODUCT = 'SET_ACTIVE_PRODUCT',
    SET_DISCOUNT_STATUS = 'SET_DISCOUNT_STATUS',
    INCREMENT_PRODUCT_COUNT = 'INCREMENT_PRODUCT_COUNT',
    DECREMENT_PRODUCT_COUNT = 'DECREMENT_PRODUCT_COUNT',
}

type setProductCount = {
    type: CustomerActionTypes.SET_PRODUCT_COUNT,
    payload: number
}

type setActiveProduct = {
    type: CustomerActionTypes.SET_ACTIVE_PRODUCT,
    payload: ProductType | null
}

type setTotalPrice = {
    type: CustomerActionTypes.SET_TOTAL_PRICE,
    payload: number
}

type setDiscountStatus = {
    type: CustomerActionTypes.SET_DISCOUNT_STATUS,
    payload: boolean
}

type incrementProductCount = {
    type: CustomerActionTypes.INCREMENT_PRODUCT_COUNT,
}

type decrementProductCount = {
    type: CustomerActionTypes.DECREMENT_PRODUCT_COUNT,
}

export type CustomerStateType = {
    productCount: number
    activeProduct: null | ProductType
    totalPrice: number,
    discount: boolean
}

export type CustomerActionCreatorTypes = 
    setProductCount |
    setActiveProduct |
    setTotalPrice |
    setDiscountStatus |
    incrementProductCount |
    decrementProductCount