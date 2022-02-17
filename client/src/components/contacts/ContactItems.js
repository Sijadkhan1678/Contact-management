import React,{useContext} from 'react';
import ContactContext from '../../context/contacts/contactContext'
import propTypes from 'prop-Types'

const  ContactItems =({contact}) => {

    const {id,name,email,phone,type}=contact;

    const contactContext= useContext(ContactContext)

    const {deleteContact,setCurrent,clearCurrent} = contactContext

    const onDelete=() => {
       deleteContact(id)
       clearCurrent();
    }    


  return (
    <div>
       <h3>{name}
       <span className={'badge'+(type !='professional' ? 'badge-primary': 'badge-success')}>
           {type.charAt(0).toUppercase()+type.slice(1)}  </span>
       </h3>
       <ul>
           {email && (
               <li><i className='fas fa-envelope-open'/> {email}</li>
           )
           }

           {phone &&(
               <li><i className=''/>{phone}</li>
           )}
       </ul>
       <p>
       <button onClick={()=>setCurrent(contact)}>Edit</button>
       <button onClick={onDelete}>Delete</button>

       </p>
           
    </div>
  )
}
ContactItems.propTypes={
    contact: PropTypes.object.isRequired
}
export default ContactItems;
