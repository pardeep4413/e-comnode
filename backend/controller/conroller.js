const mongoose = require('mongoose');
const userdata = require('../models/model');
const products = require('../models/model1');
const { json } = require('express');

const getproducts = async (req, resp) => {
   const getproduct = await products.find();
   if (getproduct.length >0 ) {
      resp.status(200).json(getproduct);
   }
   else {
      resp.json({ message: "no poducts" });
   }

}

const updateproduct=async(req,resp)=>{
   const res=await products.updateOne({_id: req.params.id},
      {
         $set:req.body
      })
      resp.send(res);
}

const searchproduct=async(req,resp)=>{
   const res=await products.find({
      "$or":[
         {name:{$regex:req.params.key}},
         {company:{$regex:req.params.key}},
         {categorey:{$regex:req.params.key}},
      ]
   })

   resp.send(res);
}

const singleproducts = async(req, resp) => {
   let res = await products.findOne({ _id: req.params.id });
   if (res) {
      resp.json(res);
   }
   else {
      resp.json({ message: "product not found" });
   }

}

const delproducts = async (req, resp) => {
   let res = await products.deleteOne({ _id: req.params.id });
   resp.json(res);
}

const product = async (req, resp) => {
   const productdata = new products(req.body);
   const res = await productdata.save();
   resp.status(200).json(res);
}

const register = async (req, resp) => {
   const mynewdata = new userdata(req.body);
   const res = await mynewdata.save();
   resp.status(200).json(res);
};

const logout = async (req, resp) => {
   console.log(req.body)
   if (req.body.name && req.body.password) {
      let user = await userdata.findOne(req.body).select("-password");
      //user=await user.json(user);
      //console.log(user);
      if (user) {
         resp.send(user);
      }
      else {
         resp.send({message:"user not found"});
      }
   }
   else {
      resp.send({message:'user2 not found'});
   }
};

module.exports = {
   register,
   logout,
   product,
   getproducts,
   delproducts,
   singleproducts,
   updateproduct,
   searchproduct,
}