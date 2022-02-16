const express = require('express');
const router = express.Router();
const {
     check,
     validationResult
} = require('express-validator/check');
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../middleware/auth')
const brypt = require('bcryptjs')

const User = require('../models/User')
//## get api/auth
// ## desc get logged in the user
//  ## acess private
router.get('/', async (req, res) => {
     try {
          const user = await User.findById(req.user.id).select('-password');
          res.json(user);
     } catch (err) {
          console.error(err.message)
          res.status(500).send('server error')

     }
})

// ### post api/auth
// ## desc login the user
//###  access public
router.post('/',[
     check('email','please provide a valid email').isEmail(),
     check('password','please enter a password')     

], async (req, res) => {
     
     const errors= validationResult(req)
     if(!errors.isEmpty()){
      return    res.status(401).json({errors: errors.array()})
     }
      const {email,password}= req.body;
      try{
          const user= await User.findOne({email})
          if(!user){
               res.status(400).json({ msg: ' Auser with this email does not exist'})
          }

          const isMatch= await bcrypt.compare(password,user.password);

          if(!isMatch){
               res.status(400).json({msg: 'incorrect password'});

          }
          const payload={
               user:{
               id: user.id
          }
     }
          jwt.sign(payload, config.get(jwtSecret),{
               expiresIn: 3600000
          },(err,token)=>{
             if(err) throw err;
             res.json({token})
          })
     }
      
      catch(err){
        console.error(err.message)
        res.status(500).send('server error')
      }

});

module.exports = router;