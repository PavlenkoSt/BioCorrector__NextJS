import { ArticleType } from "../reducers/articlesReducer"

export enum ArticlesActionTypes {
    SET_ARTICLES = 'SET_ARTICLES',
    SET_ARTICLE = 'SET_ARTICLE',
    SET_NEXT_ARTICLE = 'SET_NEXT_ARTICLE'
}

type setArticles = {
    type: ArticlesActionTypes.SET_ARTICLES
    payload: Array<ArticleType>
}

type setArticle = {
    type: ArticlesActionTypes.SET_ARTICLE
    payload: ArticleType
}

type setNextArticle = {
    type: ArticlesActionTypes.SET_NEXT_ARTICLE
    payload: ArticleType
}

export type ArticlesrStateType = {
    articles: Array<ArticleType>,
    targetArticle: ArticleType,
    nextArticle: ArticleType
}

export type ArticlesActionCreatorTypes = 
    setArticles |
    setArticle | 
    setNextArticle
    