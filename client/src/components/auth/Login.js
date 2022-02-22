import React,{useState,useContext,useEffect} from "react";
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext'


 const Register = props => {
   const authContext= useContext(AuthContext);
   const alertContext= useContext(AlertContext);

   const {setAlert}=alertContext;
   const {loginUser,isAuthenticated,clearErrors,error}=authContext;

   useEffect(()=>{
    if(isAuthenticated){
        props.history.push('/')
    }
    if(error ==='Incorrect password'){
        setAlert(error,'danger')
        clearErrors();
    }
},[error,isAuthenticated,props.history])

     const [user,setUser]=useState({
         email: '',
         password: ''

        });


     const {email,password}=user
   const  onChange = e=> setUser({...user,[e.target.name]: e.target.value})

  const  onSubmit = e=>{
    e.preventDefault();
    if(email=='' || password==''){
      setAlert('Please fill the login form', 'danger');
    } else{
      loginUser({email,password});
    }
  } 


  return (
    <div className='form-container'>
       <form onSubmit={onSubmit}>
        <div className='form-control'>
            <lable htmlFor='email'>Email</lable>
            <input type='email' name='email' value={email} placeholder='Enter email' onChange={onChange} />
        </div>
        <div className='form-control'>
            <lable htmlFor='password'>Password</lable>
            <input type='password' name='password' value={password} onChange={onChange} />
        </div>
        <input type='submit' value='Login'/>
        </form>
      

    </div>
  )
}
export default Register;