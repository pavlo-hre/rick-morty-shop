import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  SELECT_ITEM,
} from "./actionTypes"
import {apiFetch} from "../../Helpers/apiFetch"
import {setCountOnPage} from "./pages"

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
  payload: id
})




