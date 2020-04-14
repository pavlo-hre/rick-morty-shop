import {combineReducers} from "redux"
import productReducer from "./productReducer"
import { reducer as formReducer } from 'redux-form'

const appRedux = combineReducers({
  product: productReducer,
  form: formReducer,
})

const reducer = (state, action) => appRedux(state, action)

export default reducer
