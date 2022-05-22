const express = require('express')
const route = require('./routes/site')
const app = express()

const db = require('./config/database')
db.connect()

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(express.urlencoded())
app.use(express.json())
app.use('/', route)


const PORT = 5000


app.listen(PORT, () => console.log('Server started on port ${PORT}'))