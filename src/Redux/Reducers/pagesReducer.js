import {SET_COUNT_ON_PAGE, SET_CURRENT_PAGE} from "../Actions/actionTypes"

const initialState = {
  activePage: 1,
  pageCount: 12,
  pages: null,

}

export const pageReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COUNT_ON_PAGE:
      return {
        ...state,
        pageCount: payload.count,
        pages: payload.pages
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, activePage: payload
      }
    default:
      return state
  }
}
