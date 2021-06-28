import fetcher from "../../helpers/fetcher"
import reviewsActions from "../actionCreators/reviews"
import { ThunkType } from "../reducers"


export const getReviewsThunk = (page: number = 0): ThunkType => async dispatch => {
    const data = await fetcher(`/api/reviews?page=${page}`)

    if(data){
        await dispatch(reviewsActions.setReviewsSuccess(data.data))
    }
}
