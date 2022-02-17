import React, {userReducer} from 'react'
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
                phone: '111-333-444-999'
            },
            {   id: 3,
                name: 'Wasim Khan',
                email: 'wasim@gmail.com',
                phone: '201-301-402-989'
            }
        ]
    }
    const [state,dispatch]= userReducer(contactReducer,initialState)

    // add contact 
    // remove contact





  return <contactContext.provider value={{
      contacts: state.contacts
  }}>
      {props.childern}
  </contactContext.provider>
}

export default contactState;
