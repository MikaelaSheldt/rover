// api/circles.js
const router = require('express').Router();

// matches GET requests to /api/circles/
router.get('/', function (req, res, next) { /* etc */});
// matches POST requests to /api/circles/
router.post('/', function (req, res, next) { /* etc */});
// matches PUT requests to /api/circles/:circleId
router.put('/:circleId', function (req, res, next) { /* etc */});
// matches DELETE requests to /api/circles/:circleId
router.delete('/:circleId', function (req, res, next) { /* etc */});

module.exports = router;
