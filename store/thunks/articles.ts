import fetcher from "../../helpers/fetcher"
import articlesActions from "../actionCreators/articles"
import { ThunkType } from "../reducers"


export const getArticlesThunk = (page: number = 0): ThunkType => async dispatch => {
    const data = await fetcher(`/api/articles?page=${page}`)

    if(data){
        await dispatch(articlesActions.setArticlesSuccess(data.data))
    }
}