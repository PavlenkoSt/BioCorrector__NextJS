import { ArticleType } from "../reducers/articlesReducer"
import { ArticlesActionTypes } from "../types/articles"


const articlesActions = {
    setArticlesSuccess: (payload: Array<ArticleType>) => ({ type: ArticlesActionTypes.SET_ARTICLES, payload }),
    setArticleSuccess: (payload: ArticleType) => ({ type: ArticlesActionTypes.SET_ARTICLE, payload }),
    setNextArticleSuccess: (payload: ArticleType) => ({ type: ArticlesActionTypes.SET_NEXT_ARTICLE, payload }),
}

export default articlesActions