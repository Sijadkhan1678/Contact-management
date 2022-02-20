import React,{useReducer} from 'react';
import authReducer from './alertReducer';
import { v4 as uuid} from 'uuid'
import alertContext from './alertContext'
import {SET_ALERT,REMOVE_ALERT} from '../Types'

const alertState = props =>{

    const initialState=[];
    const {state,dispatch}= useReducer(authReducer,initialState);

    const setAlert = (msg,type,timeout=5000)=>{
        const id= uuid();
        dispatch({type: SET_ALERT, payload: {msg,type,id}})
        
        setTimeout(dispatch({type:REMOVE_ALERT,payload: id}),timeout)
    }


 return(<alertContext.provider value={{alerts: state,
                                      setAlert}}>   

 { props.childern} </alertContext.provider>)

}

export default alertState;
