import {
  FETCH_DATA_ERROR,
  FETCH_DATA_START,
  FETCH_DATA_SUCCES,
  SELECT_ITEM,
} from "Redux/Actions/actionTypes"


const initialState = {
  data: [],
  isLoading: false,
  error: null,
  selected: {},
}

export const productReducer = (state = initialState, {type, payload, error}) => {
  switch (type) {
    case FETCH_DATA_START:
      return {
        ...state, isLoading: true,
      }

    case FETCH_DATA_SUCCES:
      return {
        ...state,
        data: payload.map(el => ({...el})),
        isLoading: false,
      }

    case FETCH_DATA_ERROR:
      return {
        ...state, isLoading: false, error: error
      }

    case SELECT_ITEM:
      return {
        ...state, selected: {...state.data.find(el => el.id === payload)}
      }

    default:
      return state
  }
}

