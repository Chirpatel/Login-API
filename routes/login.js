const express  = require('express');
const {Router} = express;
const router = Router();
const user = require('../modules/User');

router.post('/',async (req,res) =>{
    try{
        const {Email,Password} = req.query;
        //console.log(req.query);
        //console.log(Email);
        //console.log(Password);
        const User = await user.findOne({Email: Email})
        //console.log(User);
        if(User && User.Password===Password){
            return res.status(200).json({UserId: User.UserId, Email: User.Email, UserName: User.UserName})
        }else{
            return res.status(404).json("Invalid EmailID or Password");
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json("Server Error");
    }
})



module.exports = router;