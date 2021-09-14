require("dotenv").config();
const express = require("express");
const router = express.Router();
const users = require('./users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post("/api/login", async (req,res) => {
  const user = await users.find(user => user.email === req.body.email);

  if(user) {
      const passwordCorrect = await bcrypt.compare(req.body.password, user.password)
      if(!user && !passwordCorrect){
          return res.sendStatus(400).json({msg: "Invalid username or password"})
      }
      
          jwt.sign(
            {user: user}, 'secretkey', (err, token) => {
    
              res.json({
                  token
              });
          })
          res.sendStatus(200)
      
  
  }
})
module.exports = router;