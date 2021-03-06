import React,{useContext,Fragment} from "react";
import propTyps from "prop-types";
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';



const Navbar = ({title,icon})=> { 
const authContext= useContext(AuthContext);
const {isAuthenticated,logOut,clearContacts,user}=authContext
  
const onLogout= ()=>{
    logOut();
    clearContacts()
}
const authLink=(
<Fragment>
    <li>Hello {user&& user.name}</li>
    <li>
        <a href='#!' onClick={onLogout}>
        <i className='fas fa-sign-out-alt'/>
        <span className='hide-sm'>Logout</span>
        </a>
        </li>
</Fragment>
)
const guestLinks=(
    <Fragment>
      <li><Link to='/register'>Rigister</Link></li>
     <li> <Link to='/login'>Login</Link> </li>
    </Fragment>
)

    return(
        <div className='navbar bg-primary'>
           <h1>
               <i  className={icon}/> {title}
         
              
           </h1>
           <ul>
           
               <li><Link to='/about'>About</Link></li>
               {isAuthenticated ? (authLink): (guestLinks)}
              
           </ul>

        </div>
    )
}

Navbar.propTyps={
title: propTyps.string.isRequired,
icon: propTyps.string
}
Navbar.defaultProps={
title:'ContactManagement',
icon : 'fas fa-id-card-alt'

}

export default Navbar;
