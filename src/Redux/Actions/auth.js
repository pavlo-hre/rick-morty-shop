import axios from "axios"
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes"

const authSuccess = (token,user) => ({
  type: AUTH_SUCCESS,
  token,
  user
})
export const logOut = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  localStorage.removeItem('cart')
  localStorage.removeItem('expirationDate')
  return {
    type: AUTH_LOGOUT
  }
}
const autoLogOut = time => dispatch => {
  setTimeout(() => dispatch(logOut()), time * 1000)
}

export const autoLogin = () => dispatch => {
  const token = localStorage.getItem('token')
  const user = localStorage.getItem('user')
  if (!token) {
    dispatch(logOut())
  } else {
    const expDate = new Date(localStorage.getItem('expirationDate'))
    if (expDate <= new Date()) {
      dispatch(logOut())
    } else {
      dispatch(authSuccess(token, user))
      dispatch(autoLogOut((expDate.getTime() - new Date().getTime()) / 1000))
    }
  }
}
export const auth = (email, password, isLogin) => async (dispatch) => {
  const authData = {
    email,
    password,
    returnSecureToken: true
  }
  let loginUrl = isLogin ?
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD42J9iMaQEhmEWDNgsBT1wxJInbKRlMS0`
    :
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD42J9iMaQEhmEWDNgsBT1wxJInbKRlMS0`
  try {
    const {data} = await axios
      .post(loginUrl, authData)
    const expDate = new Date(new Date().getTime() + data.expiresIn * 1000)
    const userName= email.replace(/@.*/, '')
    localStorage.setItem('token', data.idToken)
    localStorage.setItem('user', userName)
    localStorage.setItem('expirationDate', expDate)
    dispatch(authSuccess(data.idToken, userName))
    dispatch(autoLogOut(data.expiresIn))
  } catch (e) {
    console.log(e)
  }
}
