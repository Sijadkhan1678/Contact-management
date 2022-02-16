   const express = require('express')
   router = express.Router();

   const {  check,validationResult} = require('express-validator/check')
   const config = require('config');
   const jwt = require('jsonwebtoken');
   const bcrypt = require('bcryptjs');
   const User = require('../models/User')
   

   // ***** Post api/users *******
   // ***** desc Register a user ******
   // ***** access  :  Public   ************

   router.post('/', [
         check('name', 'please enter a name').not().isEmpty(),
         check('email', 'please enter a valid email').isEmail(),
         check('password', 'please enter a password with at least 6 charactors').isLength({
           min: 6
         })

       ], (req, res) => {
         const errors = validationResult(req);
         if (!errors.isEmpty()) {
           res.status(400).json({  error: errors.array() })
         }
         const { name, email,password} = req.body 
         try {
           //here find user with this email exist

           let user = await User.findOne({email});


           // if exist then return message

           if (user) {
             return res.status(400).json({
               msg: 'user with this email already exist'
             });

           }
           user =  new User({
             name,
             email,
             password
           });
           const salt = await bcrypt.genSalt(10)
           user.password = await bcrypt.hash(password, salt);
           user.save();

           payload = {
             user: {
               id: user.id
             }
           }
           jwt.sign(payload, config.get('jwtSecret'), {
               expiresIn: 30000000
             },
             (err, token) => {
               if (err) throw err;
               res.json({
                 token
               })
             }
           )
            }
           catch (err) {
             console.error(err.message);
             res.status(500).send('server error')

           }

         }
   )

       module.exports = router;