import {AUTH_LOGOUT, AUTH_SUCCESS} from "../Actions/actionTypes"

const initialState = {
  token: null,
  user: null,
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state, token: action.token, user: action.user
      }
    case AUTH_LOGOUT:
      return {
        ...state, token: null
      }
    default:
      return state
  }
}
