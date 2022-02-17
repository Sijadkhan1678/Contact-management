import React, {userReducer} from 'react'
import {v4 as uuid}  from 'uuid'
import contactContext from './contactContext'
import contactReducer from './contactReducer'
import { ADD_CONTACT,REMOVE_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,SET_CURRENT,CLEAR_CURRENT,SET_ALERT,REMOVE_ALERT,FILETER_CONTACTS,CLEAR_FILTER } from '../Types'



 const contactState = props => {
     
    const initialState={
        contacts: [
            {   id: 1,
                name:  'Sijad Khan',
                email: 'sijad@gmail.com',
                phone: '123-345-455-233',
                type : 'professional'
            },{ 
                id : 2,
                name: 'Arshad Khan',
                email: 'arshad@gmail.com',
                phone: '111-333-444-999',
                type: 'professional'

            },
            {   id: 3,
                name: 'Wasim Khan',
                email: 'wasim@gmail.com',
                phone: '201-301-402-989',
                type:  'personal'
            }
        ]
    }
    const [state,dispatch]= userReducer(contactReducer,initialState)


    // add contact 
  const  addContact= contact=>{
      contact.id=uuid();
      dispatch({
          
          type: ADD_CONTACT,
          payload: contact
       } )
  }

    // remove contact

    // uptate contact

    // delete contact

    // filter contact

    //clear filter

    // 





  return (<contactContext.provider value={{
      contacts: state.contacts,
      addContact
  }}>
      {props.childern}
  </contactContext.provider> )
}

export default contactState;
