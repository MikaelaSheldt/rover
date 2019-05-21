'use strict'

const db = require('../server/db')
const {Vet, Pet} = require('../server/db/models')
const vetData = require('./vetData')
const petData = require('./petData')


async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Vet.bulkCreate(vetData)
  await Pet.bulkCreate(petData)

  console.log(`seeded successfully`)
}

// separated the `seed` function from the `runSeed` function.
// isolates the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
