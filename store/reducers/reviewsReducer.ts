import { ReviewsStateType, ReviewsActionCreatorTypes } from './../types/reviews'
import { ReviewsActionTypes } from "../types/reviews"

const initialState = {
    reviews: [] as Array<ReviewType>,
    targetReview: {} as ReviewType,
    nextReview: {} as ReviewType
}

const reviewsReducer = (state = initialState, action: ReviewsActionCreatorTypes): ReviewsStateType => {
    switch(action.type){
        case ReviewsActionTypes.SET_REVIEWS: {
            return {
                ...state,
                reviews: action.payload
            }
        }
        case ReviewsActionTypes.SET_REVIEW: {
            return {
                ...state,
                targetReview: action.payload
            }
        }
        case ReviewsActionTypes.SET_NEXT_REVIEW: {
            return {
                ...state,
                nextReview: action.payload
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default reviewsReducer


export type ReviewType = {
    id: number
    author: string,
    city: string,
    date: string,
    text: Array<string>
}