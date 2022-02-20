
import React,{useState,useEffect,useContext} from "react";
import authContext  from "../../context/auth/authContext";
import AlertContext from '../../context/alert/alertContext'

 const Register = () => {
     const AuthContext= useContext(authContext);
     const alertContext= useContext(AlertContext);

     const {setAlert}= alertContext
     const {register,clearErors,error}= AuthContext;
     
     const [user,setUser]=useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

     useEffect(()=>{
         if(error ==='a user with this email already exist'){
             setAlert(error,'danger')
             clearErors();
         }
     },[error])

     
     const {name,email,password,password2}=user
   const  onChange = e=> setUser({...user,[e.target.name]: e.target.value});
const onSubmit = e =>{
    e.preventDefault();
    if(name=='' || email=='' || password==''){

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
            <lable htmlFor='name'>Name</lable>
            <input type='text' name='name' value={name} placeholder='Enter your name' onChange={onChange} />
        </div>
        <div className='form-control'>
            <lable htmlFor='email'>Email</lable>
            <input type='email' name='email' value={email} placeholder='Enter email' onChange={onChange} />
        </div>
        <div className='form-control'>
            <lable htmlFor='password'>Password</lable>
            <input type='password' name='password' value={password} onChange={onChange} minLength='6'/>
        </div>
        <div className='form-control'>
            <lable htmlFor='password2'>Name</lable>
            <input type='password' name='password2' value={password2} onChange={onChange} minLength='6'/>
        </div>
        <input type='submit' value='Register'/>

        </form>
      

    </div>
  )
}
export default Register;
