const express=require('express');
const connectDB=require('./db/config');
const cors=require('cors');

const app=express();

//middlewares
app.use(cors());
app.use(express.json());
app.use('/',require('./routers/router'));

//databaseconnected
connectDB();

app.listen(3030,()=>{
   console.log('server running on 3030');
});