import {SEARCH_ITEM, SORT_DATA} from "./actionTypes"
import {setCountOnPage} from "./pages";

export const sortData = dir => ({
  type: SORT_DATA,
  payload: dir
})

export const searchItem = value => ({
  type: SEARCH_ITEM,
  payload: value
})
