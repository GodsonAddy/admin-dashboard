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
          return res.status(400).json({msg: "Invalid username or password"})
      }
      else {
          jwt.sign(
            {user: user}, 'secretkey', (err, token) => {
    
              res.json({
                  token
              });
          })
          res.send(200).json({msg: "good"})
      }
  
  }
})
module.exports = router;