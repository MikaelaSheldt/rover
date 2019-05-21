const Sequelize = require('sequelize')
const db = require('../db')

const Circle = db.define('circle', {
  information: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  picture: {
    type: Sequelize.STRING
  }
})

module.exports = Circle
