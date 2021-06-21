import { AnyAction } from "redux"


const initialState = {
    products: [
        {
            id: 0, 
            name: ''
        }
    ]
}

export default function productsReducer(state = initialState, action: AnyAction){
    switch(action.type){
        default: 
            return {
                ...state
            }
    }
}

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