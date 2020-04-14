import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  REMOVE_CART_ITEM,
  SELECT_ITEM
} from "../Actions/actionTypes"

const initialState = {
  data: [],
  selected: {},
  cart: {
    orders: [],
    total: 0,
  },
  isLoading: false,
  error: null,
}

const productReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state, isLoading: true,
      }
    case FETCH_DATA_SUCCES:
      return {
        ...state, data: action.data, isLoading: false,
      }
    case FETCH_DATA_ERROR:
      return {
        ...state, isLoading: false, error: action.error
      }
    case SELECT_ITEM:
      return {
        ...state, selected: {...state.data.find(el => el.id === action.id)}
      }
    case ADD_TO_CART:
      return {
        ...state, data: state.data.map(el => {
          if (el.id === action.order.id) {
            ++el.inCart
          }
          return el
        }),
        cart: {
          ...state.cart, orders: state.data.filter(el => !!el.inCart),
          total: state.cart.total + action.order.price
        },
        selected: {...state.selected, inCart: ++state.selected.inCart},
      }
    case DEC_CART_ITEM:
      return {
        ...state, data: state.data.map(el => {
          if (el.id === action.order.id) {
            --el.inCart
          }
          return el
        }),
        cart: {
          ...state.cart, orders: state.data.filter(el => !!el.inCart),
          total: state.cart.total - action.order.price
        },
        selected: state.selected.id === action.order.id
          ?
          {...state.selected, inCart: --state.selected.inCart}
          :
          state.selected,
      }
    case REMOVE_CART_ITEM:
      return {
        ...state, data: state.data.map(el => {
          if (el.id === action.order.id) {
            el.inCart = 0
          }
          return el
        }),
        cart: {
          ...state.cart, orders: state.data.filter(el => !!el.inCart),
          total: state.cart.total - action.order.price
        },
        selected: state.selected.id === action.order.id
          ?
          {...state.selected, inCart: 0}
          :
          state.selected,
      }
    default:
      return state
  }
}
export default productReducer
