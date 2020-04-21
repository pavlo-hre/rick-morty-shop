import {
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_SUCCESS, CLOSE_AUTH_MODAL,
  OPEN_AUTH_MODAL
} from "Redux/Actions/actionTypes"

const initialState = {
  token: null,
  user: null,
  error: null,
  isModalOpen: false,
  expirationDate: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user,
        error: null,
        expirationDate: action.expDate
      }
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
        error: null,
        expirationDate: null
      }
    case AUTH_ERROR:
      return {
        ...state, error: action.error
      }
    case OPEN_AUTH_MODAL:
      return {
        ...state, isModalOpen: true
      }
    case CLOSE_AUTH_MODAL:
      return {
        ...state, isModalOpen: false
      }
    default:
      return state
  }
}
