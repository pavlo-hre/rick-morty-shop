import {applyMiddleware, compose, createStore} from 'redux'
import reducer from "./Reducers/rootReducer"
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const create = () => {
  return createStore(reducer, composeEnhancers(applyMiddleware(ReduxThunk)))
}

