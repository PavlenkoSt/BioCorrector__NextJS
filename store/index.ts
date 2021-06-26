import {createStore, Store, applyMiddleware} from 'redux'
import {createWrapper, Context} from 'next-redux-wrapper'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))
const makeStore = (context: Context) => createStore(rootReducer, composeEnhancers)

export const wrapper = createWrapper<Store<any>>(makeStore, {debug: true})