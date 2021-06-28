import { ProductType } from "../reducers/cutomerReducer"

export enum CustomerActionTypes {
    SET_PRODUCT_COUNT = 'SET_PRODUCT_COUNT',
    SET_TOTAL_PRICE = 'SET_TOTAL_PRICE',
    SET_ACTIVE_PRODUCT = 'SET_ACTIVE_PRODUCT',
    SET_DISCOUNT_STATUS = 'SET_DISCOUNT_STATUS',
    SET_CUSTOMER_DATA = 'SET_CUSTOMER_DATA',
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

type setCustomerData = {
    type: CustomerActionTypes.SET_CUSTOMER_DATA,
    payload: CustomerDataType
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
    discount: boolean,
    customerData: CustomerDataType
}

export type CustomerActionCreatorTypes = 
    setProductCount |
    setActiveProduct |
    setTotalPrice |
    setDiscountStatus |
    setCustomerData |
    incrementProductCount |
    decrementProductCount


export type CustomerDataType = {
    name: string | null
    tel: string | null
}