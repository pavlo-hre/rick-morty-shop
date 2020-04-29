import {SEARCH_ITEM, SORT_DATA} from "../Actions/actionTypes"

const initialState = {
  searchQuery: '',
  sortDir: null,


  // selected: {},
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
    default:
      return state
  }
}
