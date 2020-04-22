import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  REMOVE_CART_ITEM,
  SELECT_ITEM,
  SET_CURRENT_PAGE,
  SET_COUNT_ON_PAGE
} from "Redux/Actions/actionTypes"
import {RESET_SEARCH, SEARCH_ITEM} from "../Actions/actionTypes";


const initialState = {
  data: [],
  pageData: [],
  activePage: 1,
  pageCount: 12,
  pages: null,
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
        pages: Math.ceil(action.data.length / state.pageCount)

      }
    case FETCH_DATA_ERROR:
      return {
        ...state, isLoading: false, error: action.error
      }
    case SEARCH_ITEM:
      return {
        ...state,
        data: state.data
          .filter(el => el.name.toLowerCase().includes(
            action.value.toLowerCase().trim()
          ))
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        activePage: action.page,
        pageData: state.data
          .slice(action.page * state.pageCount - state.pageCount,
            action.page * state.pageCount)
      }
    case SET_COUNT_ON_PAGE:
      return {
        ...state,
        pageCount: action.count,
        pages: Math.ceil(state.data.length / action.count)
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
        pageData: state.data
          .slice(state.activePage * state.pageCount - state.pageCount,
            state.activePage * state.pageCount),
        cart: {
          ...state.cart, orders: state.data.filter(el => !!el.inCart),
          total: state.cart.total + action.order.price
        },
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
      }
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cart: {
          ...state.cart,
          orders: state.cart.orders.filter(el => el.id !== action.order.id),
          total: state.cart.total - action.order.price * action.order.inCart
        },
        data: state.data.map(el => {
          if (el.id === action.order.id) {
            el.inCart = 0
          }
          return el
        }),
      }
    default:
      return state
  }
}
export default productReducer
