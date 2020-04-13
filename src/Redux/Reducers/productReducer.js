import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES, SELECT_ITEM
} from "../Actions/ActionTypes";

const initialState = {
  data: [],
  selected: {},
  isLoading: false,
  error: null
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_START:
      return {
        ...state, isLoading: true
      }
    case FETCH_DATA_SUCCES:
      return {
        ...state, data: action.data, isLoading: false
      }
    case FETCH_DATA_ERROR:
      return {
        ...state, isLoading: false, error: action.error
      }
    case SELECT_ITEM:
      return {
        ...state, selected: {...state.data.find(el => el.id === action.id)}
      }
    default:
      return state
  }
}
export default productReducer
