const config= require('config');
const db= config.get('mongoURI')
const mongoose= require('mongoose')

const connectDB= async () => {

  try{ 
    
    await mongoose.connect("mongodb+srv://Sijad:12312323@contactmanager.aoyho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
       useNewUrlParser: true,
       useUnifiedTopology: true
    }
    )
    console.log('mongodb connected')
}
catch(err){
    console.error(err.message)
    process.exit(1)
}

}

module.exports= connectDB
