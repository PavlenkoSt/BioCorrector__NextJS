import { HYDRATE } from "next-redux-wrapper"
import { AnyAction, combineReducers } from "redux"
import articlesReducer from "./articlesReducer"
import customerReducer from "./cutomerReducer"
import productsReducer from "./productsReducer"
import questionsReducer from "./questionsReducer"
import reviewsReducer from "./reviewsReducer"


const combinedReducer = combineReducers({
    products: productsReducer,
    reviews: reviewsReducer,
    questions: questionsReducer,
    customer: customerReducer,
    articles: articlesReducer
})

const rootReducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, 
            ...action.payload, 
        }
    if (state.count) nextState.count = state.count 
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export default rootReducer