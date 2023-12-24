import express from 'express';
import products from './data/products.js'
import dotenv from 'dotenv';
import mongoCon from './config/dbc.js';


dotenv.config();//this gives the access to the all env variable so this must be at the top of your code
//if u call mogoCon() befour this config then it will return undefined error coz mongocon contains the env variable
//one more thing is must add your current ip to mongo 
mongoCon();//connects to the mogodb


const port = process.env.PORT;

const app = express();

app.get('/',(req,res)=>{
    res.send("Api is running.. ")
});

app.get('/api/products',(req,res)=>{
    res.json(products);
})

app.get('/api/products/:id',(req,res)=>{
    const product = products.find((p)=>p._id === req.params.id);
    res.json(product);
})


app.listen(port,()=>{console.log("Running at "+port);})

