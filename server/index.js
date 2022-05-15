const express = require('express')
const route = require('./routes/site')
const app = express()

const db = require('./config/database')
db.connect()

app.use(express.urlencoded())
app.use(express.json())
app.use('/', route)

const PORT = 3000

app.listen(PORT, () => console.log('Server started on port ${PORT}'))