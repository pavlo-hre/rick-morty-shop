import {SORT_DATA} from "../Actions/actionTypes"

const initialState = {
  // searchRequest: '',
  // filterSettings: {},
  sortDir: null,
  // selected: {},
}

export const filterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SORT_DATA:
      return {
        ...state, sortDir: payload
      }
    default:
      return state
  }
}
