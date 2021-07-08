import express from 'express';
import mongoose from 'mongoose';
import Video from './models/Video.js';

// app config

const app = express();

// middlewares
app.use(express.json());
app.use( (req,res,next) =>{
   res.setHeader('Access-Control-Allow-Origin','*');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

// db config
const db_uri = "mongodb+srv://admin:selimb053348@cluster0.ilm8n.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(db_uri, { useUnifiedTopology:true, useNewUrlParser:true, useCreateIndex:true });

//routers
app.get('/', (req,res)=>{
   res.status(200).send('Back-End');
});

app.get('/videos', (req,res) =>{
   Video.find( (err,data) =>{
      if (err)
         res.status(500).send(err);
      else
         res.status(200).send(data);
   });
});

app.post('/new', (req,res) =>{
   const video = req.body;
   Video.create(video, (err, data)=>{
      if(err){
         res.status(500).send(err);
      }
      else{
         res.status(201).send(data);
      }
   });
});

const port = process.env.PORT || 9000;

//listen
app.listen(port, ()=> console.log(`localhost dinleniyor port: ${port}`));