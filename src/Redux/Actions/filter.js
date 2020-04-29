import {FILTER_DATA, RESET_FILTER, SEARCH_ITEM, SORT_DATA} from "./actionTypes"
import {setCountOnPage} from "./pages";
import {createFilter} from "../../Helpers/filterHelper";

export const sortData = dir => ({
  type: SORT_DATA,
  payload: dir
})

export const searchItem = value => ({
  type: SEARCH_ITEM,
  payload: value
})

export const filterData = ({name, value}) => (dispatch, getState) => {
  const filterSettings = createFilter(getState().filter.param, name, value)
  dispatch({
    type: FILTER_DATA,
    payload: filterSettings
  })
}

export const resetFilters = () => ({
  type: RESET_FILTER
})
