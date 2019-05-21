const Sequelize = require('sequelize')
const db = require('../db')

const Vet = db.define('vet', {
  profile: {
    type: Sequelize.TEXT,
  },
  email: {
    type: Sequelize.STRING
  },
  picture: {
    type: Sequelize.STRING
  }
})

module.exports = Vet
