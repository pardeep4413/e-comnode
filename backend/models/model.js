const mongoose = require("mongoose");

const schema=new mongoose.Schema(
    {
        name:{
            type:String
            
        },
        email:{
            type:String,
        
        
        },
        password:{
            type:String,
            required:true,
            
        }

    }
);

/*const productschema=new mongoose.Schema({

    name:{
        type:String
    },
    price:{
        type:String
    },
    category:{
        type:String
    },
    company:{
        type:String
        
    },
});*/

module.exports=mongoose.model('userdata',schema);
//module.exports=mongoose.model('products',productschema);