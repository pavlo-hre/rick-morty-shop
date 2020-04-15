import {AUTH_ERROR, AUTH_LOGOUT, AUTH_SUCCESS} from "../Actions/actionTypes"

const initialState = {
  token: null,
  user: null,
  error: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, token: action.token, user: action.user, error: null
      }
    case AUTH_LOGOUT:
      return {
        ...state, token: null
      }
    case AUTH_ERROR:
      return {
        ...state, error: action.error
      }
    default:
      return state
  }
}
