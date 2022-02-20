import React,{Fragment,useContext} from 'react';
import ContactItems from './ContactItems'
import contactContext from '../../context/contacts/contactContext';


const Contacts=() => {
 const  ContactContext= useContext(contactContext);
 const {contacts,filtered}= ContactContext;

 
   if(contacts.length==null){
   return <h2>Please use use the form to add contacts</h2>

}
  return (
<Fragment>
  {
 filtered !== null ? filtered.map( contact => (<ContactItems key={contact.id} contact={contact}/>))
 : contacts.map(contact=> (<ContactItems key={contact.id} contact={contact} />))

}
  </Fragment>
  )
}

export default Contacts;