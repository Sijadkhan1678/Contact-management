import React,{useState,useEffect,useContext} from "react";
import AuthContext  from "../../context/auth/authContext";
import AlertContext from '../../context/alert/alertContext'

 const Register = props => {
     const authContext= useContext(AuthContext);
     const alertContext= useContext(AlertContext);

     const {setAlert}= alertContext
     const {register,clearErrors,error,isAuthenticated}= authContext;
     
     const [user,setUser]=useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

     useEffect(()=>{
         if(isAuthenticated){
             props.history.push('/')
         }
         if(error ==='A User with this email already exist'){
             setAlert(error,'danger')
             clearErrors();
         }
     },[error,isAuthenticated,props.history])

     
     const {name,email,password,password2}=user
   const  onChange = e=> setUser({...user,[e.target.name]: e.target.value});
const onSubmit = e =>{
    e.preventDefault();
    if(name==='' || email==='' || password===''){

       setAlert('please enter all fields','danger')

    } else if(password !== password2){

        setAlert('Confirm Password and password does not match', 'danger')
    }else {
        register({
            name,
            email,
            password,

        })
    }

}

  return (
    <div className='form-container'>
        <h1>User Rigister</h1>
       <form onSubmit={onSubmit}>
            <div className='form-control'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
        </div>
        <div className='form-control'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={email} placeholder='Enter email' onChange={onChange} />
        </div>
        <div className='form-control'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={password} onChange={onChange} minLength='6'/>
        </div>
        <div className='form-control'>
            <label htmlFor='password2'>Confirm password</label>
            <input type='password' name='password2' value={password2} onChange={onChange} minLength='6'/>
        </div>
        <input type='submit' value='Register' className="btn btn-primary btn-block"/>

        </form>
      

    </div>
  )
}
export default Register;
