// api/triangles.js
const router = require('express').Router();

// matches GET requests to /api/triangles/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/triangles/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/triangles/:triangleId
router.put('/:triangleId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/triangles/:triangleId
router.delete('/:triangleId', function (req, res, next) { /* etc */});

module.exports = router;
