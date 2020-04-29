import {
  ADD_TO_CART,
  DEC_CART_ITEM,
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES, FILTER_DATA, INC_CART_ITEM,
  REMOVE_CART_ITEM, RESET_FILTER, RESET_SEARCH, SEARCH_ITEM,
  SELECT_ITEM, SET_COUNT_ON_PAGE, SET_CURRENT_PAGE, SORT_DATA, SYNC_DATA,
} from "./actionTypes"
import {apiFetch} from "../../Helpers/apiFetch"
import {setCountOnPage} from "./pages";

const fetchStart = () => ({
  type: FETCH_DATA_START
})
const fetchError = error => ({
  type: FETCH_DATA_ERROR,
  error
})

export const fetchData = () => async (dispatch, getState) => {
  dispatch(fetchStart())
  try {
    const data = await apiFetch()
    dispatch({
      type: FETCH_DATA_SUCCES,
      payload: data
    })
  } catch (e) {
    dispatch(fetchError(e.message))
    console.log(e)
  }
  dispatch(setCountOnPage(12))
}


export const setSelected = id => ({
  type: SELECT_ITEM,
  id
})

/////


// export const setCurrentPage = page => ({
//   type: SET_CURRENT_PAGE,
//   page
// })

// export const setCountOnPage = count => dispatch => {
//   dispatch({
//     type: SET_COUNT_ON_PAGE,
//     count
//   })
//   dispatch(setCurrentPage(1))
// }

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
