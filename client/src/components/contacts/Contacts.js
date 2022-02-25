import React,{Fragment,useContext,useEffect} from 'react';
import ContactItems from './ContactItems'
import contactContext from '../../context/contacts/contactContext';


const Contacts=() => {
 const  ContactContext= useContext(contactContext);
 const {contacts,filtered,getContacts,loading}= ContactContext;

 useEffect(()=>{
   getContacts()
  // eslint-disable-next-line
 },[])

 
   if(contacts.length==0){
   return <h2>Please use use the form to add contacts</h2>

}
  return (
  {  contacts.length !== 0 && !loading ? (<Fragment>
      {
     filtered !== null ? filtered.map( contact => (<ContactItems key={contact.id} contact={contact}/>))
     : contacts.map(contact=> (<ContactItems key={contact.id} contact={contact} />))
    
    }
      </Fragment>
      
    ) : (<spinner/>)}
  
  )
}

export default Contacts;