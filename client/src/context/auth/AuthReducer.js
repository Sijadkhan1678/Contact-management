
import {REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT,AUTH_ERROR,CLEAR_ERRORS, USER_LOADED } from "../Types";


const AuthReducer = (state,action)=>{

    switch(action.type){
        case USER_LOADED:
            return{
                ...state,
                isAthenticated: true,
                loading: false,
                user: action.payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case LOGOUT:
            localStorage.setItem('token',action.payload);
            return{

                ...state,
                ...action.payload,
                isAthenticated: true,
                loading: false                
            }
            case REGISTER_FAIL:
            case AUTH_ERROR:
            case LOGIN_FAIL:
                localStorage.removeItem('token');
                return{
                    ...state,
                    isAthenticated: false,
                    loading: false,
                    user: null,
                    error: action.payload


                }
                case CLEAR_ERRORS:
                 return{   ...state,
                           error: null,

                 }
        default:
         return   state;
    }

}
export default AuthReducer;
