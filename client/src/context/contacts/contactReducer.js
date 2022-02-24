
import { ADD_CONTACT,DELETE_CONTACT,UPDATE_CONTACT,CLEAR_CONTACTS,SET_CURRENT,CLEAR_CURRENT,FILTER_CONTACTS,CLEAR_FILTER } from '../Types'


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
                    case FILTER_CONTACTS:
                        return{
                            ...state,
                            filtered: state.contacts.filter(contact=>  {
                                const regex= new RegExp(action.payload,'gi');
                                return contact.name.match(regex ) || contact.email.match(regex)
                            })
                        }
                    case CLEAR_CONTACTS:
                        return{
                            ...state,
                            contacts: []
                        }
                        case CLEAR_FILTER:
                            return{
                                ...state,
                                filtered: null
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
export default contactReducer;