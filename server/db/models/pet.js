const Sequelize = require('sequelize')
const db = require('../db')

const Pet = db.define('pet', {
  information: {
    type: Sequelize.TEXT,
  },
  picture: {
    type: Sequelize.STRING
  }
})

module.exports = Pet
