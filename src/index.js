import express from "express";
import envConfig from "./configs/envConfig.js";
import database from "./config/database.js";


const port = envConfig.PORT || 8081;

const app = express();

app.use('/api/user',userRouter);

app.listen(port,(err)=>{
    if(err){
        console.log("error.mesage");    
    }else{
        console.log("server start");
        console.log(`http://localhost:${port}`);
        
    }
})

