import { ArticlesActionCreatorTypes, ArticlesActionTypes } from './../types/articles'
import { AnyAction, Store } from "redux"
import { ThunkAction } from "redux-thunk"

const initialState = {
    articles: [],
    targetArticle: {},
    nextArticle: {}
}

const articlesReducer = (state = initialState, action: ArticlesActionCreatorTypes) => {
    switch(action.type){
        case ArticlesActionTypes.SET_ARTICLES: {
            return {
                ...state,
                articles: action.payload
            }
        }
        case ArticlesActionTypes.SET_ARTICLE: {
            return {
                ...state,
                targetArticle: action.payload
            }
        }
        case ArticlesActionTypes.SET_NEXT_ARTICLE: {
            return {
                ...state,
                nextArticle: action.payload
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default articlesReducer



export type ThunkType = ThunkAction<void, Store, unknown, AnyAction>

export type ArticleType = {
    id: number
    title: string
    date: string
    text: Array<string>
}