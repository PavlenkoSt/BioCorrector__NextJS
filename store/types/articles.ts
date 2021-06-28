import { ArticleType } from "../reducers/articlesReducer"

export enum ArticlesActionTypes {
    SET_ARTICLES = 'SET_ARTICLES'
}

type setArticles = {
    type: ArticlesActionTypes.SET_ARTICLES
    payload: Array<ArticleType>
}

export type ArticlesrStateType = {
    articles: Array<ArticleType>,
}

export type ArticlesActionCreatorTypes = 
    setArticles 
    