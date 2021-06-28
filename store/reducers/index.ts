import { HYDRATE } from "next-redux-wrapper"
import { AnyAction, combineReducers, Store } from "redux"
import { ThunkAction } from "redux-thunk"
import articlesReducer from "./articlesReducer"
import customerReducer from "./cutomerReducer"
import questionsReducer from "./questionsReducer"
import reviewsReducer from "./reviewsReducer"


const combinedReducer = combineReducers({
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



export type ThunkType = ThunkAction<void, Store, unknown, AnyAction>