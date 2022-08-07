import express from 'express';
import cors from 'cors';
import { generateQuote } from './quote.js';
import mongoose from 'mongoose';
import useNewUrlParser from 'dotenv/config';

const app = express();
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json())
app.get('/',(_,res)=>{
    res.send('root endpoint')
})
app.get('/quote',async (req,res)=>{
    try{
        res.json(generateQuote());    
    }catch(err){
        res.json({message:err});
    }
})

app.listen('4000',()=>{
    console.log(`Listening at port`)
})

mongoose.connect(process.env.DB_CONNECTION,useNewUrlParser,()=>{
    console.log("connected");
})