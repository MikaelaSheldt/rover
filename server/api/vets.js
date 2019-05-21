// api/vets.js
const router = require('express').Router();
const Vet = require('../db/models/vet')

// matches GET requests to /api/vets/
router.get('/', async (req, res, next) => {
  try {
    const vets = await Vet.findAll()
    res.json(vets)
  } catch (err) {
    next(err)
  }
});

// matches POST requests to /api/vets/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/vets/:vetId
router.put('/:vetId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/vets/:vetId
router.delete('/:vetId', function (req, res, next) { /* etc */});

module.exports = router;
