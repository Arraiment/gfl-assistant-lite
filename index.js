const express = require('express')
const scraper = require('./scraper');
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  scraper.getDolls()
    .then((names) => {
      console.log(names);
      res.render('index', { names: names })
    })
    .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})