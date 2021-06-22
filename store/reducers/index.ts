import { HYDRATE } from "next-redux-wrapper"
import { AnyAction, combineReducers } from "redux"
import productsReducer from "./productsReducer"
import questionsReducer from "./questionsReducer"


const combinedReducer = combineReducers({
  products: productsReducer,
  questions: questionsReducer
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