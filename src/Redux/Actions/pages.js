import {SET_COUNT_ON_PAGE, SET_CURRENT_PAGE} from "./actionTypes"

export const setCurrentPage = page => ({
  type: SET_CURRENT_PAGE,
  payload: page
})

export const setCountOnPage = count => dispatch => {
  dispatch({
    type: SET_COUNT_ON_PAGE,
    payload: count
  })
  dispatch(setCurrentPage(1))
}
