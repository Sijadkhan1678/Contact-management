const express = require('express');
const router = express.Router();

//##  Get api/contacts
//**  desc: get all contacts  **
// access private
router.get('/',
    (req, res) => {
        res.send('get all contacts')
    }


)
//%%% Post api/contacts
//%%% desc add contact
//%%% access public

router.post('/', (req, res) => {
        res.send(' add contact ')
    }


);
//%%% put api/contacts
//%%% desc update contact
//%%% access private


router.put('/', (req, res) => {
    res.send('update contact')
})
//%%% delete api/contacts
//%%% desc delete contact
//%%% access private


router.delete('/', (req, res) => {
    res.send('delete contact')
})
module.exports = router