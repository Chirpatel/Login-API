const express  = require('express');
const {Router} = express;
const router = Router();
const shortid =  require('shortid');
const User = require('../modules/User');
router.post('/',async (req,res) =>{
    //console.log(req.body);
    const {Email,Password,UserName} = req.body;
    const UserId = shortid.generate();
    
    try{
        let user = await User.findOne({UserID: UserId});
        while(user){
            UserId = shortid.generate();
            user = await User.findOne({UserID: UserId});
        }
        user = await User.findOne({Email: Email});
        if(user){
            return res.json({UserId: user.UserId, value: "User Already Exists"});
        }else{
            user =  new User({
                UserId,
                UserName,
                Email,
                Password,
                date: new Date()
            });
            await user.save();
            res.json(user);
        }
    }
    catch(err){
        console.log(err);
        res.status(500).json("Server Error");
    }
})



module.exports = router;