import { AnyAction } from "redux"


const initialState = {
    products: [
        {
            id: 0, 
            name: ''
        }
    ]
}

const productsReducer = (state = initialState, action: AnyAction) => {
    switch(action.type){
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
    picture: string
}

type CharacteristicsType = {
    point: string
    value: string
}