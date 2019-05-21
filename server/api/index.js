// api/index.js
const router = require('express').Router();

router.use('/circles', require('./circles')); // matches all requests to /api/circles/
router.use('/vets', require('./vets')); // matches all requests to  /api/vets/


// api/rectangles/ ?!?! Get outta town!
router.use(function (req, res, next) {
  const err = new Error("Stop asking for things you can't have.");
  err.status = 404;
  next(err);
});

module.exports = router;
