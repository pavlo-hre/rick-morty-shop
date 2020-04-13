import axios from "axios"
import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES, SELECT_ITEM
} from "./ActionTypes"

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

export const setSelected = id =>({
  type: SELECT_ITEM,
  id
})


export const fetchData = () => async dispatch => {
  try {
    dispatch(fetchStart())
    const {data} = await axios
      .get(`https://rick-morty-3c452.firebaseio.com/heroes.json`)
    dispatch(fetchSuccess(data['-M4hkpNGoQXhJjS4ymkS']))
  } catch (e) {
    dispatch(fetchError(e))
    console.log(e)
  }
}
