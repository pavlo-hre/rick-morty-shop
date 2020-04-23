import {combineReducers} from "redux"
import productReducer from "./productReducer"
import {authReducer} from "./authReducer"
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['product', '_persist']
}
const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  blacklist: ['data', 'initData', 'pageData', 'activePage', 'error', 'isLoading',
    'pageCount', 'pages', 'searchRequest', 'selected', 'sortDir', '_persist'
  ]
}

const appRedux = combineReducers({
  product: persistReducer(cartPersistConfig, productReducer),
  auth: authReducer,
})

export default persistReducer(rootPersistConfig, appRedux)
