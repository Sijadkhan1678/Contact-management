const mongoose= require('mongoose')


const contactSchema= mongoose.Schema(
{
    user: {

        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'

    },
    name: {
        type: String,
        require: true
    },
    phone:{
        type :String,
        require: true
    },
    email: {
       type: String,
       require: true
    },
    type:{
        type: String,
        default : 'Professional'
    },
    date: {
        type: Date,
        default: Date.now
        
    }

}
)

module.exports= mongoose.model('contacts',contactSchema)