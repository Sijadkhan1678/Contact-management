
import React,{useState,useContext,useEffect} from 'react';
import ContactContext from '../../context/contacts/contactContext';



 const ContactForm = () => {
  const contactContext= useContext(ContactContext)
  const {Addcontact,current,clearCurrent,updateContact}=contactContext

   useEffect(()=>{
     if (current !==null){
       setContact(current)
     } else{
       setContact({
        name:'',
        email: '',
        phone: '',
        type: 'personal'
   
       })
     }
   },[contactContext,current]);

const  allClear = () =>{
  clearCurrent();
}
 const [contact,setContact]= useState({
     name:'',
     email: '',
     phone: '',
     type: 'personal'
 }) 

 const {name,email,phone,type}=contact

 const onchange= e=> setContact({...contact,[e.target.name]: e.target.value});
 const onsubmit= e=>{
     e.preventDefault();

     if(current==null){

       Addcontact(contact);

     }else{
       updateContact(contact);
     }
       allClear();
    
 }
  return (
    <form onSubmit={onsubmit}>
       <h2>{current ? 'Edit contact' : 'Add contact'}</h2> 
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
             checked={type=='professional'} onChange={onchange}/> professional

        <div><input type='submit' value={current ? 'Update contact': 'Add contact' }/></div>
        {current && (
          <button onClick={allClear}>Clear</button>
        )}
    </form>
  )
}

export default ContactForm;
