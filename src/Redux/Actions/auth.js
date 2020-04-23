import axios from "axios"
import {
  AUTH_ERROR,
  AUTH_LOGOUT,
  AUTH_SUCCESS,
  CLOSE_AUTH_MODAL,
  OPEN_AUTH_MODAL
} from "./actionTypes"

const authSuccess = (token, user, expDate) => ({
  type: AUTH_SUCCESS,
  token,
  user,
  expDate
})

const authError = error => ({
  type: AUTH_ERROR,
  error
})

export const openAuthModal = () => ({
  type: OPEN_AUTH_MODAL
})
export const closeAuthModal = () => ({
  type: CLOSE_AUTH_MODAL
})

export const logOut = () => {
  return {
    type: AUTH_LOGOUT
  }
}
const autoLogOut = time => dispatch => {
  setTimeout(() => dispatch(logOut()), time * 1000)
}

export const checkAuth = () => (dispatch, getState) => {
  const token = getState().auth.token
  const expirationDate = getState().auth.expirationDate
  if (!token) {
    dispatch(logOut())
  } else {
    const expDate = new Date(expirationDate)
    if (expDate <= new Date()) {
      dispatch(logOut())
    } else {
      dispatch(autoLogOut((expDate.getTime() - new Date().getTime()) / 1000))
    }
  }
}

export const auth = (email, password, userName, isLogin) => async (dispatch) => {
  const authData = {
    email,
    password,
    returnSecureToken: true,
  }
  const key = process.env.REACT_APP_KEY
  let loginUrl
  if (isLogin) {
    loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`
  } else {
    loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`
    authData.displayName = userName ? userName : email.replace(/@.*/, '')
  }

  try {
    const {data} = await axios
      .post(loginUrl, authData)
    const expDate = new Date(new Date().getTime() + data.expiresIn * 1000)
    dispatch(authSuccess(data.idToken, data.displayName, expDate))
    dispatch(autoLogOut(data.expiresIn))
  } catch (error) {
    console.log(error)
    const errorMessage = error.response
      ?
      error.response.data.error.message
      :
      'SERVER ERROR, PLEASE TRY LATER'
    dispatch(authError(errorMessage))
    //EMAIL_NOT_FOUND
    //INVALID_PASSWORD
    //EMAIL_EXISTS
  }
}
