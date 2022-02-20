import React,{useState} from "react";




 const Register = () => {
     const [user,setUser]=useState({
         email: '',
         password: ''

        });
     const {email,password}=user
   const  onChange = e=> setUser({...user,[e.target.name]: e.target.value})

  return (
    <div className='form-container'>
       <form>
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
