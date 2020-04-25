import axios from "axios"
import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES, FILTER_DATA, INC_CART_ITEM,
  REMOVE_CART_ITEM, RESET_FILTER, RESET_SEARCH, SEARCH_ITEM,
  SELECT_ITEM, SET_COUNT_ON_PAGE, SET_CURRENT_PAGE, SORT_DATA, SYNC_DATA,
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


export const fetchData = () => async (dispatch, getState) => {
  try {
    dispatch(fetchStart())
    const {data} = await axios
      .get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
    let resData = data['-M5S5FeMLhIOnq7jmZ2G']
    const cartData = getState().product.cart.orders
    if (cartData.length) {
      resData = resData.map(el => {
        cartData.forEach(item => {
          if (el.id === item.id) {
            el.inCart = item.inCart
          }
        })
        return el
      })
    }
    dispatch(fetchSuccess(resData))
    dispatch(syncData())
  } catch (e) {
    dispatch(fetchError(e))
    console.log(e)
  }
}

export const addToCart = order => dispatch => {
  dispatch({
    type: ADD_TO_CART,
    order
  })
  dispatch(syncData())
}
export const incCart = order => dispatch => {
  dispatch({
    type: INC_CART_ITEM,
    order
  })
  dispatch(syncData())
}
export const decCart = order => dispatch => {
  dispatch({
    type: DEC_CART_ITEM,
    order
  })
  dispatch(syncData())
}

export const removeFromCart = order => dispatch => {
  dispatch({
    type: REMOVE_CART_ITEM,
    order
  })
  dispatch(syncData())
}

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  page
})

export const setCountOnPage = count => dispatch => {
  dispatch({
    type: SET_COUNT_ON_PAGE,
    count
  })
  dispatch(setCurrentPage(1))
}

export const searchItem = value => (dispatch, getState) => {
  dispatch({
    type: SEARCH_ITEM,
    value
  })
  dispatch(setCountOnPage(getState().product.pageCount))
}

export const syncData = () => ({
  type: SYNC_DATA,
})

//todo
// export const resetSearch = () => (dispatch, getState) => {
//   dispatch({
//     type: RESET_SEARCH,
//   })
//   dispatch(setCountOnPage(getState().product.pageCount))
// }

export const sortData = dir => (dispatch, getState) => {
  dispatch({
    type: SORT_DATA,
    dir
  })
  dispatch(searchItem(getState().product.searchRequest))
}


export const filterData = filter => (dispatch, getState) => {
  dispatch({
    type: FILTER_DATA,
    filter
  })
  dispatch(setCountOnPage(getState().product.pageCount))
}

export const resetFilter = () => ({
  type: RESET_FILTER
})
