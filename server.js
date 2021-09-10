require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const flash = require('connect-flash');

const authRoute = require('./routes/login');
const verifyToken = require('./config/auth');
const jwt = require("jsonwebtoken");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use(flash());
app.use((req,res,next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})
app.use('/', authRoute);
app.post('http:localhost:3000/Home',verifyToken, (req,res) => {
    jwt.verify(req.token, "secretkey", (err, authData) => {
        if(err) {
            res.sendStatus(403)
        } else {
            res.json({
                authData
            })
        }
    })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is listening to port', port)
})