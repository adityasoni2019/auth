// dev = node server + react server
// prod = node server + static react files

const express = require('express');
const app = express(); 
const cors = require('cors'); 
// we need this because, we're basically hitting the API request from some other post (i.e., the frontned, which is hosted on localhost:3000 cause it's the react thing)
// and, we only need this cors in dev env, cause on prod, we wouldn't have a different server for frontend.

app.use(cors());
// this is a middleware. 

app.use(express.json());
// we're also going to be using this as a middleware.

app.get('/hello', starterFun);

app.listen('1337', hitFn);


app.post('/api/register', handlePostRegister); 







function handlePostRegister(req, res){
    console.log(req.body);
    res.json({status: "ok"})
}







function starterFun(req, res){
    res.send('hello, this is the starter page'); 
}


function hitFn(req, res){
    console.log("server started on 1337"); 
}