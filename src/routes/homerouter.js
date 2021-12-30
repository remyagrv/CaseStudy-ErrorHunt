const express = require('express'); 
const homeRouter = express.Router();
function homeroute(nav){
    homeRouter.get('/',function(req,res){

        res.render('home',{
            nav
        });
        
    })
    return homeRouter;
    
}







module.exports = homeroute;