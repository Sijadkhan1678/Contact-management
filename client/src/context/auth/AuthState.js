import React, {useReducer} from 'react'
import axios from 'axios'
import setAuthToken from '../../utils/setAuthToken'
import authContext from './authContext'
import AuthReducer from './AuthReducer'
import { REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,AUTH_ERROR,USER_LOADED,CLEAR_ERRORS,LOGOUT} from '../Types'


 const AuthState = props => {
     
    const initialState={
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null  
    }
    const [state,dispatch]= useReducer(AuthReducer,initialState);

    const loadUser= async ()=>{
          
      // Set token global
      if(localStorage.token){
        setAuthToken(localStorage.token)
      }

      try{
           const res = await axios.get('/api/auth');
           dispatch({type: USER_LOADED,payload: res.data})
      }
      catch(err){
     dispatch({type: AUTH_ERROR})
      }
    }
    // login user
    const loginUser= async formData=>{
      const config={
        headers: {
          'Content-Type': 'application/json'
        }
      }
     
     try{
       const res = await axios.post('/api/auth',formData,config);
      dispatch({
       type: LOGIN_SUCCESS,
       payload:  res.data
      })
     }
     catch(err){
          dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data.msg
          })
     }
    }
    const logOut = ()=>{
         dispatch({type: LOGOUT})
    }

    // Register
   const register = async formData =>{
         
     const config={
       headers: {
         'Content-Type': 'application/json'
       }
     }
    
    try{
      const res = await axios.post('/api/user',formData,config);
     dispatch({
      type: REGISTER_SUCCESS,
      payload:  res.data
     })
    }
    catch(err){
         dispatch({
           type: REGISTER_FAIL,
           payload: err.response.data.msg
         })
    }
   }

  const clearErrors= ()=>dispatch({ type: CLEAR_ERRORS })
  
    
  return (<authContext.Provider value={{
         token : state.token,
         isAuthenticated: state.isAuthenticated,
         loading : state.loading,
         user: state.user,
         error: state.error,
         register,
         clearErrors,
         loadUser,
         loginUser,
         logOut
        }}>
      {props.children}
  </authContext.Provider> )
}

export default AuthState;
