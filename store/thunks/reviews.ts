import fetcher from "../../helpers/fetcher"
import reviewsActions from "../actionCreators/reviews"
import { ThunkType } from "../reducers"


export const getReviewsThunk = (page: number = 0): ThunkType => async dispatch => {
    const data = await fetcher(`/api/reviews?page=${page}`)

    if(data){
        await dispatch(reviewsActions.setReviewsSuccess(data.data))
    }
}

export const getTargetReviewThunk = (id: string): ThunkType => async dispatch => {
    if(id){
        const data = await fetcher(`/api/reviews/${id}`)

        if(data){
            dispatch(reviewsActions.setTargetReviewSuccess(data))
            dispatch(getNextReviewThunk(String(+id + 1)))
        }
    }
}

const getNextReviewThunk = (id: string): ThunkType => async dispatch => {
    if(id){
        const data = await fetcher(`/api/reviews/${id}`)
        
        if(Object.keys(data).length !== 0){
            await dispatch(reviewsActions.setNextReviewSuccess(data))
        }else{
            const data = await fetcher(`/api/reviews/0`)
            await dispatch(reviewsActions.setNextReviewSuccess(data))
        }
    }
}