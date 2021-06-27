import { ReviewType } from '../reducers/reviewsReducer'

export enum ReviewsActionTypes {
    SET_REVIEWS = 'SET_REVIEWS',
    SET_REVIEW = 'SET_REVIEW',
    SET_NEXT_REVIEW = 'SET_NEXT_REVIEW'
}

type setReviews = {
    type: ReviewsActionTypes.SET_REVIEWS
    payload: Array<ReviewType>
}

type setReview = {
    type: ReviewsActionTypes.SET_REVIEW
    payload: ReviewType
}

type setNextReview = {
    type: ReviewsActionTypes.SET_NEXT_REVIEW
    payload: ReviewType
}

export type ReviewsStateType = {
    reviews: Array<ReviewType>
    targetReview: ReviewType
    nextReview: ReviewType
}

export type ReviewsActionCreatorTypes = 
    setReviews |
    setReview |
    setNextReview