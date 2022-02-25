import React, {useReducer} from 'react'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import axios  from 'axios'
import { ADD_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,CLEAR_CONTACTS,SET_CURRENT,CLEAR_CURRENT,FILTER_CONTACTS,CLEAR_FILTER } from '../Types'




 const ContactState = props => {
     
    const initialState={
        contacts: [],
        current: null,
        filtered: null
    }
    const [state,dispatch]= useReducer(contactReducer,initialState)
  
    // get Contacts 
    const getContacts = async () =>{

      try{
      const res = await axios.get('/api/contacts')
      }
      catch(err){
        console.log(err)
      }
    }

    // add Contact
  const  addContact= async contact =>{
    const config={
        headers: {
          'Content-Type': 'application/json'
        }
      }
     
     try{
       const res = await axios.post('/api/contacts',contact,config);
      dispatch({
       type: ADD_CONTACT,
       payload:  res.data
      })
     }
     catch(err){
         console.log(err)
     }
}

  // uptate contact 
  const  updateContact= async contact =>{
    const config={
        headers: {
          'Content-Type': 'application/json'
        }
      }
     
     try{
       const res = await axios.put(`/api/contacts${contact._id}`,contact,config);
      dispatch({
       type: ADD_CONTACT,
       payload:  res.data
      })
     }
     catch(err){
         console.log(err)
     }
}

  
  // delete contact
  const deleteContact = async id =>{
    try{
    const res = await axios.delete(`/api/contacts${id}`);
       dispatch({
           type: DELETE_CONTACT,
           payload : id
       })
      }
      catch(err){
        console.log(err)
      }
  }

  
    //  set current
  const setCurrent= contact=>{
           dispatch({
               type : SET_CURRENT,
               payload: contact
           })
  }
  
  // clear current
  
  const clearCurrent= ()=>{

      dispatch({type: CLEAR_CURRENT})
  }


    // filter contact
    const filterContacts = text =>{
        dispatch({
            type: FILTER_CONTACTS,
            payload :  text
          }  )
    }

    //clear filter
  
    const clearFilter= ()=>{
        dispatch({type: CLEAR_FILTER })
    }
    //  Clear Contacts 
     
    const clearContacts = ()=>{
    dispatch({type: CLEAR_CONTACTS})
    }





  return (<contactContext.Provider value={{
      contacts: state.contacts,
      current: state.current,
      filtered: state.filtered,
      addContact,
      updateContact,
      deleteContact,
      filterContacts,
      clearFilter,
      setCurrent,
      clearCurrent,
      clearContacts,
  }}>
      {props.children}
  </contactContext.Provider> )
}

export default ContactState;
