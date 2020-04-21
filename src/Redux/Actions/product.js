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
      .get(`https://rickandmortyapi.com/api/character/`)
    const transformData = data.results.map(el => {
      el.inCart = 0
      el.location = el.location.name
      el.price = [...el.name].reduce((acc, el) => acc + el.charCodeAt(), 0)
      return el
    })
    dispatch(fetchSuccess(transformData))
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

