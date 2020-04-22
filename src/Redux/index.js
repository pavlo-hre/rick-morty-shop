import {applyMiddleware, compose, createStore} from 'redux'
import reducer from "./Reducers/rootReducer"
import ReduxThunk from 'redux-thunk'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'data',
  storage,
  whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, reducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(persistedReducer,
  composeEnhancers(applyMiddleware(ReduxThunk)))
export const persistor = persistStore(store)
