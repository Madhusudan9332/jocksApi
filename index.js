const express = require('express')
const data = require('./data.json')
const app = express()
const port = 3500

app.get('/jokes', (req, res) => {
  res.json({
    success : true,
    results : data[Math.floor(Math.random() * data.length)]
  })
})
app.get('/jokes/all', (req, res) => {
    res.json({
      success : true,
      results : data
    })
  })
app.get('/jokes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.json({
      success : true,
      results : data[id]
    })
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})