import React,{useEffect,useContext,useRef} from 'react';
 import ContactContext from '../../context/contacts/contactContext'
 
 const FilterContacts = () => {
   

  const text = useRef('')
  const Contactcontext= useContext(ContactContext)
  const {filterContacts,clearFitlter,filtered}=Contactcontext;

  useEffect(()=>{
    if(filtered == null){

      text.current.value='';
  }})
   
  const onchange= e=>{
    if(text.current.value!==''){
      filterContacts(e.target.value)
    }else{
      clearFitlter();
    }
  }
   return (
     <form>
    <input ref={text} type='text' placeholder='Search Contact' onChange={onchange}/>
     </form>
   )
 }

 export default FilterContacts;
 