import {SET_COUNT_ON_PAGE, SET_CURRENT_PAGE} from "../Actions/actionTypes"

const initialState = {
  activePage: 1,
  pageCount: 12,
}

export const pageReducer = (state = initialState, {type, payload}) => {
  switch (type) {

    case SET_COUNT_ON_PAGE:
      return {
        ...state,
        pageCount: payload
      }

    case SET_CURRENT_PAGE:
      return {
        ...state, activePage: payload
      }

    default:
      return state
  }
}
