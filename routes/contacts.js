const express= require('express')
const router = express.Router();
const { check, validationResult} = require('express-validator/check')

const User = require('../models/User');

const Contact = require('../models/Contacts')

const auth= require('../middleware/auth');


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

router.post('/',[auth, [check('name','Name is required').not().isEmpty()]],
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

router.put('/:id',auth, async (req,res)=>{

    const {name,email,phone,type}= req.body;

    // initialize empty object to store contact fields

    const contactfilds= {};

    if(name) contactfilds.name= name;

    if(email) contactfilds.email=email;

    if(phone) contactfilds.phone=phone;

    if(type) contactfilds.type= type;

    try{
        let contact= await Contact.findById(req.params.id)
        if(!contact){
            res.status(404).json({msg: 'this contact does not exist'})
        }
        if(contact.user.toString() !== req.user.id){
            res.status(401).json({msg: 'you don`t have the correct authorization to update this contact'})
        }
         contact = await Contact.findByIdAndUpdate(req.params.id,{  $set: contactfilds },
            {
            new: true
              })

              // return the updated contact

              res.json(contact)

    }
    catch(err){
        console.error(err.message)
        res.status(500).send('server error')
    }



})



//%%% delete api/contacts
//%%% desc delete contact
//%%% access private

router.delete('/:id',auth, async (req, res) => {
    try{
        let contact= await Contact.findById(req.params.id)
        if(!contact){
            res.status(404).json({msg: 'this contact does not exist'})
        }
        if(contact.user.toString() !== req.user.id){
            res.status(401).json({msg: 'you don`t have the correct authorization to delete this contact'})
        }

        await Contact.findByIdAndRemove(req.params.id)
         
            res.json({msg: 'contact successfully deleted'})
            

    }
    catch(err){
        console.error(err.message)
        res.status(500).send('server error')
    }

})
module.exports = router