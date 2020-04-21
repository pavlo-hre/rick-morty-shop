import {combineReducers} from "redux"
import productReducer from "./productReducer"
import {authReducer} from "./authReducer"

const appRedux = combineReducers({
  product: productReducer,
  auth: authReducer,
})

const reducer = (state, action) => appRedux(state, action)

export default reducer
