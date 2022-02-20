import React, {useReducer} from 'react'
import axios from 'axios'
import authContext from './authContext'
import authReducer from './authtReducer'
import { REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,AUTH_ERROR,USER_LOADED,CLEAR_ERROR,LOGOUT} from '../Types'


 const AuthState = props => {
     
    const initialState={
      token: localStorage.getItem('token'),
      isAuthenticated: null,
      loading: true,
      user: null,
      error: null  
    }
    const [state,dispatch]= useReducer(authReducer,initialState);

    // Register
   const register = async formData =>{
         
     const config={
       headers: {
         'Content-Type': 'application/json'
       }
     }
    
    try{
      const res = axios.post('/api/user',formData,config);
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

  const clearErrors= ()=>dispatch({ type: CLEAR_ERROR })
  
    
  return (<authContext.provider value={{
         token : state.token,
         isAuthenticated: state.isAuthenticated,
         loading : state.loading,
         user: state.user,
         error: state.error,
         register,clearErrors

        }}>
      {props.childern}
  </authContext.provider> )
}

export default AuthState;
