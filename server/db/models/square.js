const Sequelize = require('sequelize')
const db = require('../db')

const Square = db.define('square', {
  information: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING
  }
})

module.exports = Square
