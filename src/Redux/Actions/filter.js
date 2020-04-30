import {FILTER_DATA, RESET_FILTER, SEARCH_ITEM, SORT_DATA} from "./actionTypes"
import {setCurrentPage} from "./pages"
import {createFilter} from "Helpers/filterHelper"


export const sortData = dir => ({
  type: SORT_DATA,
  payload: dir
})

export const searchItem = value => dispatch => {
  dispatch({
    type: SEARCH_ITEM,
    payload: value
  })
  dispatch(setCurrentPage(1))
}

export const filterData = ({name, value}) => (dispatch, getState) => {
  const filterSettings = createFilter(getState().filter.param, name, value)
  dispatch({
    type: FILTER_DATA,
    payload: filterSettings
  })
  dispatch(setCurrentPage(1))
}

export const resetFilters = () => ({
  type: RESET_FILTER
})
