const express = require('express');
const router = express.Router();
const { check, validationResult} = require('express-validator/check')

const User = require('../model/User');

const Contact = require('../models/Contacts')

const auth= require('../middleware/auth');
const { route } = require('express/lib/application');

//##  Get api/contacts
//**  desc: get all contacts  **
// access private

router.get('/',auth, async (req,res)=>{
  try{
    const contacts= await Contact.find({user: req.user.id}).sort({
        date: -1
    });
    res.json(contacts)
 }

  catch (err){
    console.error(err.message);
    res.status(500).send('server error');
 }

})
//%%% Post api/contacts
//%%% desc add contact
//%%% access public

router('/',[auth, [check('name','Name is required').not().isEmpty()]],
async (req,res)=>{
   
    const errors= validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({erroo: errors.array()})
    }
    
    const {name,email,phone,type}= req.body;


    try{
        const newContact=  new Contact(
            {
                name,
                email,
                phone,
                type,
                user : req.user.id
            }
        )
        const contact= await newContact.save();
        res.json(contact)

    }
    catch(err){
        console.error(err.message)
        res.status(500).send('server error')

    }


}
)
//%%% put api/contacts
//%%% desc update contact
//%%% access private


router.put('/:id', (req, res) => {
    res.send('update contact')
})
//%%% delete api/contacts
//%%% desc delete contact
//%%% access private


router.delete('/:id', (req, res) => {
    res.send('delete contact')
})
module.exports = router