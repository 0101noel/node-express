
const express = require('express')
const app = express()

// Set up EJS as the view engine
app.set('view engine', 'ejs')

// Home page
app.get('/home', (req, res) => {
  res.render('home')
})

// About Us page
app.get('/about-us', (req, res) => {
  res.render('about')
})

// Contact Us page
app.get('/contact-us', (req, res) => {
  res.render('contact')
})

app.listen(3000, () => {
    console.log('Website runninjg at http://localhost:3000')
})