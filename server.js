const result = require('dotenv').config()
if (result.error) {
  throw result.error;
}

const express = require('express')
var cors = require('cors')
const mainRouter = require('./main.routes')

const PORT = process.env.PORT || 3030;
const app = express()

app.use(cors())
app.use('/api', mainRouter)

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})