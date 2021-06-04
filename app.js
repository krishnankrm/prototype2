const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Form'
const jwt = require('./_helpers/jwt');
const errorHandler = require('./_helpers/error-handler');
const app = express()

//setting up a mongoose connection and checking if connected
mongoose.connect(url, {useUnifiedTopology: true,useNewUrlParser: true})
const con = mongoose.connection
con.on('open', () => {
    console.log('connected...')
})

app.use(jwt());
app.use(express.json())

//passing to the routing folder.

const FormRouter = require('./routes/formroute')
app.use('/',FormRouter) 


// global error handler
app.use(errorHandler);

//Setting up the port for the nodejs server
app.listen(9001, () => {
    console.log('Server started')
})