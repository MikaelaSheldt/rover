const Pet = require('./pet')
const Vet = require('./vet')

// add relationships here
Pet.belongsToMany(Vet, {through: 'Matches'})
Vet.belongsToMany(Pet, {through: 'Matches'})

module.exports = {
  Pet,
  Vet,
}
