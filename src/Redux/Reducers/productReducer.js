import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  REMOVE_CART_ITEM,
  SELECT_ITEM,
  SET_CURRENT_PAGE,
  SET_COUNT_ON_PAGE,
  RESET_SEARCH,
  SEARCH_ITEM,
  SYNC_DATA,
  INC_CART_ITEM
} from "Redux/Actions/actionTypes"
import {syncData, transformCartData} from "../../Helpers/productReducerHelper"
import {FILTER_DATA, RESET_FILTER, SORT_DATA} from "../Actions/actionTypes";
import {createFilter, filterData} from "../../Helpers/filterHelper";


const initialState = {
  initData: [],
  data: [],
  pageData: [],
  activePage: 1,
  pageCount: 12,
  pages: null,
  searchRequest: '',
  filterSettings: {},
  sortDir: null,
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
        ...state,
        initData: action.data.map(el => ({...el})),
        isLoading: false,
        pages: Math.ceil(action.data.length / state.pageCount)
      }

    case FETCH_DATA_ERROR:
      return {
        ...state, isLoading: false, error: action.error
      }

    case SYNC_DATA:
      return {
        ...state,
        data: state.data.length
          ?
          syncData(state.initData, state.data)
          :
          state.initData.map(el => ({...el})),
        pageData: state.pageData.length
          ?
          syncData(state.initData, state.pageData)
          :
          state.initData.slice(state.activePage * state.pageCount - state.pageCount,
            state.activePage * state.pageCount)
            .map(el => ({...el})),
      }

    case SEARCH_ITEM:
      return {
        ...state,
        //todo
        data: Object.keys(state.filterSettings).length ?
          state.data
            .filter(el => {
              return action.value.trim() !== ''
                ?
                el.name.toLowerCase().includes(
                  action.value.toLowerCase().trim()
                )
                :
                true
            }).sort((a, b) => {
            if (state.sortDir === 'asc') {
              return a.price - b.price
            }
            if (state.sortDir === 'desc') {
              return b.price - a.price
            }
            return 0
          })
          :
          state.initData
            .filter(el => {
              return action.value.trim() !== ''
                ?
                el.name.toLowerCase().includes(
                  action.value.toLowerCase().trim()
                )
                :
                true
            }).sort((a, b) => {
            if (state.sortDir === 'asc') {
              return a.price - b.price
            }
            if (state.sortDir === 'desc') {
              return b.price - a.price
            }
            return 0
          }),
        searchRequest: action.value.trim()
      }

    case SET_CURRENT_PAGE:
      return {
        ...state,
        activePage: action.page,
        pageData: state.data
          .slice(action.page * state.pageCount - state.pageCount,
            action.page * state.pageCount)
          .map(el => ({...el}))
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
        ...state,
        initData: transformCartData(state.initData, action.order, 'inc'),
        cart: {
          ...state.cart,
          orders:
            [...state.cart.orders, {
              ...action.order,
              inCart: action.order.inCart + 1
            }],
          total:
            state.cart.total + action.order.price
        },
      }

    case INC_CART_ITEM:
      return {
        ...state,
        initData: transformCartData(state.initData, action.order, 'inc'),
        cart: {
          ...state.cart,
          orders: transformCartData(state.cart.orders, action.order, 'inc'),
          total: state.cart.total + action.order.price
        },
      }

    case DEC_CART_ITEM:
      return {
        ...state,
        initData: transformCartData(state.initData, action.order, 'dec'),
        cart: {
          ...state.cart,
          orders: transformCartData(state.cart.orders, action.order, 'dec'),
          total: state.cart.total - action.order.price
        },
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        initData: transformCartData(state.initData, action.order, 'delete'),
        cart: {
          ...state.cart,
          orders: state.cart.orders.filter(el => el.id !== action.order.id),
          total: state.cart.total - action.order.price * action.order.inCart
        },
      }

    case SORT_DATA:
      return {
        ...state, sortDir: action.dir,
      }
    case FILTER_DATA:
      return {
        ...state,
        filterSettings: createFilter(state.filterSettings, action.filter.name, action.filter.value),
        data: filterData(state.initData,
          createFilter(state.filterSettings, action.filter.name, action.filter.value)
        ),
        sortDir: null,
        searchRequest: '',
      }

    default:
      return state
  }
}
export default productReducer
