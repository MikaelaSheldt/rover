import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import square from './square'
import circle from './circle'

const reducer = combineReducers({square, circle})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
