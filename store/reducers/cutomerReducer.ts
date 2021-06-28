import calculateDiscont from '../../helpers/calculateDiscont'
import { CustomerStateType, CustomerActionCreatorTypes, CustomerActionTypes } from '../types/customer'


const initialState = {
    productCount: 0,
    activeProduct: null as ProductType | null,
    totalPrice: 0,
    discount: false,
    customerData: {
        name: null,
        tel: null
    }
}

const customerReducer = (state = initialState, action: CustomerActionCreatorTypes): CustomerStateType => {
    switch(action.type){
        case CustomerActionTypes.SET_PRODUCT_COUNT: {
            return {
                ...state,
                productCount: action.payload
            }
        }
        case CustomerActionTypes.SET_ACTIVE_PRODUCT: {
            return {
                ...state,
                activeProduct: action.payload
            }
        }
        case CustomerActionTypes.SET_TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: action.payload                
            }
        }
        case CustomerActionTypes.SET_DISCOUNT_STATUS: {
            return {
                ...state,
                discount: action.payload            
            }
        }
        case CustomerActionTypes.SET_CUSTOMER_DATA: {
            return {
                ...state,
                customerData: action.payload           
            }
        }
        case CustomerActionTypes.INCREMENT_PRODUCT_COUNT: {
            const productPrice = state.activeProduct?.price 
            
            return !productPrice ? { ...state } : {
                ...state,
                productCount: state.productCount + 1,
                totalPrice: state.discount || state.productCount >= 2
                    ? calculateDiscont(state.productCount + 1, productPrice)
                    : (state.productCount + 1) * productPrice
            }
        }
        case CustomerActionTypes.DECREMENT_PRODUCT_COUNT: {
            const productPrice = state.activeProduct?.price 

            return !productPrice ? { ...state } : {
                ...state,
                productCount: state.productCount - 1,
                totalPrice: state.discount && state.productCount >= 4
                    ? calculateDiscont(state.productCount - 1, productPrice)
                    : (state.productCount - 1) * productPrice
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default customerReducer



export type ProductType = {
    id: number,
    name: string
    description: string
    characteristics: Array<CharacteristicsType>
    price: number
    shortDescription: string
    pictures: Array<string>
    inStock: boolean
}

export type CharacteristicsType = {
    point: string
    value: string
}