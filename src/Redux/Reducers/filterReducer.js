import {
  FILTER_DATA,
  RESET_FILTER,
  SEARCH_ITEM,
  SORT_DATA
} from "../Actions/actionTypes"

const initialState = {
  searchQuery: '',
  sortDir: null,
  param: null
}

export const filterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SORT_DATA:
      return {
        ...state, sortDir: payload
      }
    case SEARCH_ITEM:
      return {
        ...state, searchQuery: payload
      }
    case FILTER_DATA:
      return {
        ...state, param: Object.keys(payload).length ? payload : null
      }
    case RESET_FILTER:
      return {
        ...state, param: null
      }
    default:
      return state
  }
}
