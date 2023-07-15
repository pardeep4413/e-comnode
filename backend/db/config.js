const mongoose=require('mongoose');

const connectDB=()=>{
    try{
    mongoose.connect("mongodb://localhost:27017/signupdata");
    console.log('mongodb connected...');
    }
    catch(err){
        console.log(err);
    }
}

module.exports=connectDB;