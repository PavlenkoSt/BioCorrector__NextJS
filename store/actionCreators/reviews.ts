import { ReviewsActionTypes } from './../types/reviews'
import { ReviewType } from "../reducers/reviewsReducer"

const reviewsActions = {
    setReviewsSuccess: (payload: Array<ReviewType>) => ({ type: ReviewsActionTypes.SET_REVIEWS, payload })
}

export default reviewsActions