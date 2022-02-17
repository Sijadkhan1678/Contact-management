import react from "react";
import propTyps from "prop-type"
import { link } from "react-router-dom";

const Navbar = ({title,icon})=> { 

    return(
        <div className='nav'>
           <h1>
               <i  className={icon}/>{title}
         
                 
           </h1>
           <ul>
               <li> <link to='/'>Home</link></li>
               <li><link to='/about'>About</link></li>
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