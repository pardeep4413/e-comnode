const mongoose = require("mongoose");

const productschema=new mongoose.Schema({

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
});

module.exports=mongoose.model('products',productschema);