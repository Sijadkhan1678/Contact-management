import { ADD_CONTACT,REMOVE_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,SET_CURRENT,CLEAR_CURRENT,SET_ALERT,REMOVE_ALERT,FILETER_CONTACTS,CLEAR_FILTER } from '../Types'


const contactReducer= (action,state)=>{

    switch(action.type){
        case ADD_CONTACT:
            return{
                ...state,
                contacts: [...state.contacts, action.payload]
            }
            case DELETE_CONTACT:
                return {
                 ...state,
                 contacts: state.contacts.filter(contact=> contact.id!== action.payload)
                }
                case UPDATE_CONTACT:
                    return{
                        ...state,
                        contacts: state.contacts.map(contact=> contact.id == action.payload.id ? action.payload: contact)
                    }
                case SET_CURRENT:
                return{
                    ...state,
                    current: action.payload
                }
                case CLEAR_CURRENT:
                    return{
                        ...state,
                        current : null
                    }
            default :
            return state;
    }

}