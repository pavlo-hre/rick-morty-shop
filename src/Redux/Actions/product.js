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
const fetchSuccess = (data,cart) => ({
  type: FETCH_DATA_SUCCES,
  data,
  cart
})
const fetchError = error => ({
  type: FETCH_DATA_ERROR,
  error
})

export const setSelected = id => ({
  type: SELECT_ITEM,
  id
})

export const fetchData = cart => async dispatch => {
  try {
    dispatch(fetchStart())
    const {data} = await axios
      .get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)

    //todo add to data inCart field
    let resData = data['-M4hkpNGoQXhJjS4ymkS'].map(el => ({...el, inCart: 0}))

    if(cart && cart.length){
       resData = resData.map(el => {cart.forEach(elem => {
        if (elem.id === el.id) {
          el.inCart = elem.inCart
        }
      })
        return el
      })
    }
    dispatch(fetchSuccess(resData, cart = []))
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

