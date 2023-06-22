// dev = node server + react server
// prod = node server + static react files

const express = require('express');
const app = express(); 

app.get('/hello', starterFun);

app.listen('1337', hitFn);










function starterFun(req, res){
    res.send('hello, this is the starter page'); 
}


function hitFn(req, res){
    console.log("request hit on 1337"); 
}