import {createStore, Store, compose} from 'redux'
import {createWrapper, Context} from 'next-redux-wrapper'
import rootReducer from './reducers'


//@ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const makeStore = (context: Context) => createStore(rootReducer, composeEnhancers())

export const wrapper = createWrapper<Store<any>>(makeStore, {debug: true})