import {SET_COUNT_ON_PAGE, SET_CURRENT_PAGE} from "./actionTypes"

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page
})

export const setCountOnPage = count => (dispatch, getState) => {
  const productsCount = getState().product.data.length
  const pages = productsCount
    ? Math.ceil(productsCount / count)
    : 1
  dispatch({
    type: SET_COUNT_ON_PAGE,
    payload: {count, pages}
  })
  dispatch(setCurrentPage(1))
}
