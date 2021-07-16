const express = require('express')
const path = require('path')
const scraper = require('./scraper')
const app = express()
const port = process.env.PORT || 3000

app.use('/favicon.ico', express.static(
  path.join(__dirname, 'public/favicon.ico')
  ))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  scraper.getDolls()
    .then((names) => {
      res.render('index', { names: names })
    })
    .catch((error) => {
      console.log(error)
      res.render('error')
    })
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})