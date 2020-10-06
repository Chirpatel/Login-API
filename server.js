const express = require("express");
const app = express();
const login = require('./routes/login');
const signup = require('./routes/signup');
const bodyParser = require("body-parser");

const connectDB = require('./config/db');
connectDB();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.json({extend:false}));
app.use(bodyParser.json());
//app.use('/api/login',(req,res)=>{return res.json("Hello World");});
app.use('/login',login);
app.use(express.json({extend:false}));
app.use(bodyParser.json());
app.use('/signup',signup);
app.get('/activate',(req,res)=>{
  return res.status(200).json("Active");
})
// listen for requests :)
const PORT = process.env.PORT || 3100;
const listener = app.listen(PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
