const express = require('express'); 
const signupRouter = express.Router();
const user = require('../data/user');

signupRouter.get('/',function(req,res){

    res.render('signup',{});
    
})

signupRouter.get("/adduser",function(req,res){
     //point 10: req.param is the depricated one which is changed to req.query.
    var newuser = {
       
        // "uid":req.param("uid"),
        // "pwd":req.param("pwd")
        uid:req.query.uid,
        pwd:req.query.pwd
      
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.redirect("/login");
})

module.exports = signupRouter;