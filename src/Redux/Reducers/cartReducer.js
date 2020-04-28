import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  REMOVE_CART_ITEM
} from "../Actions/actionTypes"

const initialState = {
  orders: [],
  total: null
}


export const getOrderData = (data, order, type) => {
  if (!data.length) {
    return [{id: order.id, count: 1}]
  }
  if (data.some(item => item.id === order.id)) {
    let temp = data.filter(el => el.id !== order.id)
    let tempOrder = data.find(el => el.id === order.id)
    return type === 'del'
      ?
      temp
      :
      [...temp, {
        id: order.id,
        count: type === 'inc' ? tempOrder.count + 1 : tempOrder.count - 1
      }]
  } else {
    return [...data, {id: order.id, count: 1}]
  }
}


export const cartReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_TO_CART:
      return {
        ...state,
        orders: getOrderData(state.orders, payload, 'inc'),
        total: state.total + payload.price
      }
    case DEC_CART_ITEM:
      return {
        ...state, orders: getOrderData(state.orders, payload),
        total: state.total - payload.price
      }
    case REMOVE_CART_ITEM:
      return {
        ...state, orders: getOrderData(state.orders, payload, 'del'),

      }
    default:
      return state
  }
}
