const jwt = require('jsonwebtoken');
const express = require("express");
const routerUsers = express.Router();
const UserSchema = require('../userSchema')
const bcrypt = require('bcryptjs')

routerUsers.post('/', async (req, res) => {

    /*jwt.sign({user}, 'secretkey', (err, token) =>{
        res.json({
            token
        })
    });*/
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)

    newUser = new UserSchema({
        username:req.body.username,
        email:req.body.email,
        password:hashPass,
    })
    newUser.save().then(data=>res.json({success:true}))
})

routerUsers.get('/', (req, res) =>{
    res.json(user);
})

routerUsers.post('/login', (req, res) =>{
    
})

function verifyToken(req, res, next){
    
    const bearerHeader = req.headers['authorization'];
    if (typeof(bearerHeader) !== "undefined"){
        bearer=bearerHeader.split(' ');
        const token = bearer[1];
        req.token = token;
        next();
    }
    else{
        res.sendStatus(403);
    }
}

module.exports.routerUsers = routerUsers
module.exports.verifyToken = verifyToken 