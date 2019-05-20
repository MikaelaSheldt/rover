'use strict'

const path = require('path')
const express = require('express')
const volleyball = require('volleyball')
const morgan = require('morgan')
const app = express()

// static middleware so the browser can request things like 'bundle.js'
app.use(express.static(path.join(__dirname, '../public')))

// Any routes or other various middlewares should go here!
// logging middleware
app.use(volleyball)
app.use(morgan('dev'))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routing for incoming requests
app.use('/api', require('./api'))

// Make sure this is right at the end of server logic!
// The only thing after this might be a piece of middleware to serve up 500 errors for server problems
// (However, middleware to serve up 404s would before this as well)
app.get('*', function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})
//note: to give more informational messages about valid frontend routes vs routes that are invalid change the "get all"

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'You screwed up. Read the code.')
})

const port = process.env.PORT || 3000;
 // this can be very useful if I deploy to Heroku!

app.listen(port, function () {
 console.log(`I am practicing active listening on port ${port}`)
})

// if you update your db schemas, make sure you drop the tables first and then recreate them

module.exports = app
