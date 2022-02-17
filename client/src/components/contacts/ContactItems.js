import React from 'react'

const  ContactItems =({contact}) => {
    const {name,email,phone,type}=contact;

  return (
    <div>
       <h3>{name}
       <span className={'badge'+(type !='professional' ? 'badge-primary': 'badge-success')}>
           {type.charAt(0).toUppercase()+type.slice(1)}  </span>
       </h3>
       <ul>
           {email && (
               <li>{email}</li>
           )}

           {phone &&(
               <li>{phone}</li>
           )}
       </ul>
           
    </div>
  )
}
export default ContactItems;