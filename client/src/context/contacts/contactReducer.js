import { ADD_CONTACT,REMOVE_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,SET_CURRENT,CLEAR_CURRENT,SET_ALERT,REMOVE_ALERT,FILETER_CONTACTS,CLEAR_FILTER } from '../Types'


const contactReducer= (action,state)=>{

    switch(action.type){
        case ADD_CONTACT:
            return{
                contacts: [...state.contacts, action.payload]
            }
            default :
            return state;
    }

}