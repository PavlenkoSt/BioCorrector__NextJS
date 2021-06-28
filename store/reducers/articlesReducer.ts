import { ArticlesActionCreatorTypes, ArticlesActionTypes, ArticlesrStateType } from './../types/articles'


const initialState = {
    articles: [] as Array<ArticleType>
}

const articlesReducer = (state = initialState, action: ArticlesActionCreatorTypes): ArticlesrStateType => {
    switch(action.type){
        case ArticlesActionTypes.SET_ARTICLES: {
            return {
                ...state,
                articles: action.payload
            }
        }
        default: 
            return {
                ...state
            }
    }
}

export default articlesReducer



export type ArticleType = {
    id: number
    title: string
    date: string
    text: Array<string>
}