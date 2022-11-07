const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const { readdirSync } = require('fs')
const mongoose = require('mongoose')

// App
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// Mongodb

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Something went wrong'))

// routes
readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r)))

// port
const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on port ${port}`))
