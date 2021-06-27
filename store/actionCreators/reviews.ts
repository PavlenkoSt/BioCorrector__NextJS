import { ReviewsActionTypes } from './../types/reviews'
import { ReviewType } from "../reducers/reviewsReducer"

const reviewsActions = {
    setReviewsSuccess: (payload: Array<ReviewType>) => ({ type: ReviewsActionTypes.SET_REVIEWS, payload }),
    setTargetReviewSuccess: (payload: ReviewType) => ({ type: ReviewsActionTypes.SET_REVIEW, payload }),
    setNextReviewSuccess: (payload: ReviewType) => ({ type: ReviewsActionTypes.SET_NEXT_REVIEW, payload }),
}

export default reviewsActions