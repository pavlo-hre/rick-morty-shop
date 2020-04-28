import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  INC_CART_ITEM,
  REMOVE_CART_ITEM
} from "./actionTypes"


export const addToCart = order => ({
  type: ADD_TO_CART,
  payload: order
})

export const incCart = order => ({
  type: INC_CART_ITEM,
  payload: order
})

export const decCart = order => ({
  type: DEC_CART_ITEM,
  payload: order
})

export const removeFromCart = order => ({
  type: REMOVE_CART_ITEM,
  payload: order
})

