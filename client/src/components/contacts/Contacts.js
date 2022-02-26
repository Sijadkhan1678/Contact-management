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

 
   if(contacts===null){
   return <h2>Please use  the form to add contacts</h2>

}
  return (
    <Fragment>  {  contacts !== null && !loading ? (<Fragment>
      {
     filtered !== null ? filtered.map( contact => (<ContactItems key={contact.id} contact={contact}/>))
     : contacts.map(contact=> (<ContactItems key={contact.id} contact={contact} />))
    
    }
      </Fragment>
      
    ) : (<spinner/>)}
  
  </Fragment>

  )

}

export default Contacts;