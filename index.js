require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('vishaldotcom')
})

app.get('/login',(req, res) => {
  res.send('<h1>Please login at codersWorld</h1>')
})

app.get('/chai', (req, res) => {
  res.send('<h2> Welcome to chai or codersWorld</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
