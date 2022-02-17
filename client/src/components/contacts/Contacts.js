import React,{Fragment,useContext} from 'react';
import ContactItems from './ContactItems'
import contactContext from '../../context/contacts/contactContext';


const Contacts=() => {
 const  ContactContext= useContext(contactContext);
 const {contacts}= ContactContext;

  return (
<Fragment>

{contacts.map(contact=> (<ContactItems key={contact.id} contact={contact} />))}

</Fragment>
  )
  }

export default Contacts;