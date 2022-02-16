const config= require('config');
const db= config.get('mongonURI')
const mongoose= require('mongoose')

const connectDB= async () => {

  try{ 
    
    await mongoose.connect(db,{
       useNewUrlParser: true,
       useCreataeIndex: true,
       userFindAndModify: false,
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