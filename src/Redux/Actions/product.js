import axios from "axios"
import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  REMOVE_CART_ITEM,
  SELECT_ITEM,
} from "./actionTypes"

const fetchStart = () => ({
  type: FETCH_DATA_START
})
const fetchSuccess = data => ({
  type: FETCH_DATA_SUCCES,
  data
})
const fetchError = error => ({
  type: FETCH_DATA_ERROR,
  error
})

export const setSelected = id => ({
  type: SELECT_ITEM,
  id
})


export const fetchData = () => async dispatch => {
  try {
    dispatch(fetchStart())
    const {data} = await axios
      .get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
    const resData = data['-M4xVrbL-y6KiL0uMOiM']
    dispatch(fetchSuccess(resData))
  } catch (e) {
    dispatch(fetchError(e))
    console.log(e)
  }
}

export const addToCart = order => ({
  type: ADD_TO_CART,
  order
})

export const decCart = order => ({
  type: DEC_CART_ITEM,
  order
})

export const removeFromCart = order => ({
  type: REMOVE_CART_ITEM,
  order
})

