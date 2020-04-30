import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  INC_CART_ITEM,
  REMOVE_CART_ITEM, RESET_CART
} from "../Actions/actionTypes"
import {getOrderData} from "../../Helpers/cartHelper"

const initialState = {
  orders: [],
}

export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case ADD_TO_CART:
      return {
        ...state,
        orders: getOrderData(state.orders, payload, 'add'),
      }

    case DEC_CART_ITEM:
      return {
        ...state, orders: getOrderData(state.orders, payload, 'dec'),
      }

    case INC_CART_ITEM:
      return {
        ...state, orders: getOrderData(state.orders, payload, 'inc'),
      }

    case REMOVE_CART_ITEM:
      return {
        ...state, orders: getOrderData(state.orders, payload, 'del'),
      }

    case RESET_CART:
      return {
        ...state, orders: [],
      }

    default:
      return state
  }
}
