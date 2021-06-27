import fetcher from "../../helpers/fetcher"
import articlesActions from "../actionCreators/articles"
import { ThunkType } from "../reducers"


export const getArticlesThunk = (page: number = 0): ThunkType => async dispatch => {
    const data = await fetcher(`/api/articles?page=${page}`)

    if(data){
        await dispatch(articlesActions.setArticlesSuccess(data.data))
    }
}

export const getArticleThunk = (id: string): ThunkType => async dispatch => {
    if(id){
        const data = await fetcher(`/api/articles/${id}`)

        if(data){
            dispatch(articlesActions.setArticleSuccess(data))
            dispatch(getNextArticleThunk(String(+id + 1)))
        }
    }
}

const getNextArticleThunk = (id: string): ThunkType => async dispatch => {
    if(id){
        const data = await fetcher(`/api/articles/${id}`)
        
        if(Object.keys(data).length !== 0){
            await dispatch(articlesActions.setNextArticleSuccess(data))
        }else{
            const data = await fetcher(`/api/articles/0`)
            await dispatch(articlesActions.setNextArticleSuccess(data))
        }
    }
}