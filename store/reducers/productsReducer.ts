import { ProductsActionTypes, ProductsActionCreatorTypes, ProductsStateType } from './../types/products';


const initialState = {
    products: [] as Array<ProductType>
}

const productsReducer = (state = initialState, action: ProductsActionCreatorTypes): ProductsStateType => {
    switch(action.type){
        case ProductsActionTypes.SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default productsReducer

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