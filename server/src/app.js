const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const budget = require('./routes/api/budget');

app.use('/budget', budget)

app.listen(process.env.PORT || 8081, () => {console.log(`Server started`)});