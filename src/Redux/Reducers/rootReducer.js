import {combineReducers} from "redux"
import productReducer from "./productReducer"


const appRedux = combineReducers({
  product: productReducer,
})

const reducer = (state, action) => appRedux(state, action)

export default reducer
