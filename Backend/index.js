const express = require('express')
const app = express()

require('dotenv').config()
const port = process.env.SERVER_PORT  //port no mungwaya

// cors
const cors = require('cors');

app.use(express.json())   //json stringify k liye
app.use(cors());





// sary folders k Router files ko connect kr rhi index.js se
app.use('/api',require('./API/brands/Router'))
app.use('/api',require('./API/category/Router'))
app.use('/api',require('./API/product/Router'))
app.use('/api',require('./API/user/Router'))
app.use('/api',require('./API/order/Router'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port} `)
})