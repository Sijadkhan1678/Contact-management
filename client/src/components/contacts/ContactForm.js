import React,{useState,useContext} from 'react';
import contactContext from '../../context/contacts/contactContext';
import contactContext from '../../context/contacts/contactContext';


 const ContactForm = () => {
  const contactContext= useContext(contactContext)
 const [contact,setContact]=useState({
     name:'',
     email: '',
     phone: '',
     type: 'personal'
 })
 const {name,email,phone,type}=contact

 const onchange= e=> setContact({...contact,[e.target.name]: e.target.value});
 const onsubmit= e=>{
     e.preventDefault();
     contactContext.Addcontact(contact)
     setContact({
         name:'',
         email: '',
         phone: '',
         type: 'personal'
     })

 }
  return (
    <form onSubmit={onsubmit}>
       <h2>Add contact</h2> 
        <input type='text' name='name' placeholder='Name'
         value={name} onChange={onchange} />

        <input 
        type='email' name='email' placeholder='Email' 
        value={email}  onChange={onchange}/>

        <input 
         type='text' name='phone' placeholder='Phone' 
         value={phone} onChange={onchange}/>

        <input 
        type='radio' name='type' value='personal' 
        checked={type=='personal'} onChange={onchange}/> personal {' '}

        <input type='radio' name='type' value='professional' 
             checked={type=='professional'} onChange={onchange}/>
    </form>
  )
}

export default ContactForm;
