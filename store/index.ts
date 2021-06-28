import {createStore, Store, applyMiddleware} from 'redux'
import {createWrapper} from 'next-redux-wrapper'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools(applyMiddleware(thunk))
const makeStore = () => createStore(rootReducer, composeEnhancers)

export const wrapper = createWrapper<Store<any>>(makeStore, {debug: true})