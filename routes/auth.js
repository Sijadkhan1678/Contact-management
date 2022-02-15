const express = require('express');
const router= express.Router();
  

//## get api/auth
// ## desc get logged in the user
//  ## acess private
router.get('/',(req,res)=>{
     res.send('get loged in the user')
 
})

// ### post api/auth
// ## desc login the user
//###  access public
  router.post('/',(req,res)=>{

     res.send('login the user')

})

module.exports=router;
