require('dotenv').config()
const morgan = require("morgan");
const helmet = require('helmet');
const express =require('express');
require("dotenv").config();
const app = express();
const path = require('path');
const PORT = process.env.PORT || 4001;
const cors = require('cors');

app.use(cors());

const apiRoutes = require('./routes/apiRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes)
app.listen(PORT , function(){
    console.log(`Server listening on port ${PORT}`)
})