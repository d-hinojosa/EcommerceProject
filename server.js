require('dotenv').config()
const express =require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 4001;

const apiRoutes = require('./routes/apiRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes)
app.listen(PORT , function(){
    console.log(`Server listening on port ${PORT}`)
})