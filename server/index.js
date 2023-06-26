// dev = node server + react server
// prod = node server + static react files

const express = require('express');
const app = express();
const cors = require('cors');
// we need this because, we're basically hitting the API request from some other post (i.e., the frontned, which is hosted on localhost:3000 cause it's the react thing)
// and, we only need this cors in dev env, cause on prod, we wouldn't have a different server for frontend.

const mongoose = require('mongoose');
const User = require('./models/user.model');

mongoose.connect('mongodb://localhost:27017/auth-database');

app.use(cors());
// this is a middleware.

app.use(express.json());
// we're also going to be using this as a middleware.

app.get('/hello', starterFun);

app.listen('1337', hitFn);


app.post('/api/register', handlePostRegister);
app.post('/api/login', handlePostLogin);

async function handlePostLogin(req, res) {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        return res.json({ status: 'ok', user: true });
    }
    else {
        return res.json({ status: 'error', user: false });
    }
} 

async function handlePostRegister(req, res) {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' });
    }
    catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' });
    }
    // res.json({ status: "ok" })
}





function starterFun(req, res) {
    res.send('hello, this is the starter page');
}

function hitFn(req, res) {
    console.log("server started on 1337");
}