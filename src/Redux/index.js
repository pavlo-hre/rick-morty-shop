import {applyMiddleware, compose, createStore} from 'redux'
import reducer from "./Reducers/rootReducer"
import ReduxThunk from 'redux-thunk'
import {persistStore} from 'redux-persist'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer,
  composeEnhancers(applyMiddleware(ReduxThunk)))
export const persistor = persistStore(store)
