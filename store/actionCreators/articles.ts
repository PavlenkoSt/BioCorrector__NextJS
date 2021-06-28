import { ArticleType } from "../reducers/articlesReducer"
import { ArticlesActionTypes } from "../types/articles"


const articlesActions = {
    setArticlesSuccess: (payload: Array<ArticleType>) => ({ type: ArticlesActionTypes.SET_ARTICLES, payload })
}

export default articlesActions