import { ProductType } from "../reducers/productsReducer"
import { CustomerActionTypes } from "../types/customer"

const customerActions = {
    setProductCountSuccess: (payload: number) => ({ type: CustomerActionTypes.SET_PRODUCT_COUNT, payload }),
    setActiveProductSuccess: (payload: ProductType | null) => ({ type: CustomerActionTypes.SET_ACTIVE_PRODUCT, payload }),
    setTotalPriceSuccess: (payload: number) => ({ type: CustomerActionTypes.SET_TOTAL_PRICE, payload }),
    setDiscountStatus: (payload: boolean) => ({ type: CustomerActionTypes.SET_DISCOUNT_STATUS, payload }),
    incrementProductCount: () => ({ type: CustomerActionTypes.INCREMENT_PRODUCT_COUNT }),
    decrementProductCount: () => ({ type: CustomerActionTypes.DECREMENT_PRODUCT_COUNT }),
}

export default customerActions