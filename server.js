require("dotenv").config();
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');

const authRoute = require('./routes/login');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));

app.use('/', authRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server is listening to port', port)
})