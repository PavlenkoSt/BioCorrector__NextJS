import { ReviewType } from '../reducers/reviewsReducer'

export enum ReviewsActionTypes {
    SET_REVIEWS = 'SET_REVIEWS'
}

type setReviews = {
    type: ReviewsActionTypes.SET_REVIEWS
    payload: Array<ReviewType>
}

export type ReviewsStateType = {
    reviews: Array<ReviewType>
}

export type ReviewsActionCreatorTypes = 
    setReviews