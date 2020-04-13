import {combineReducers} from "redux"
import product from "./productReducer";

const appRedux = combineReducers({
  product
})

const reducer = (state, action) => appRedux(state, action)

export default reducer
