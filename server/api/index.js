// api/index.js
const router = require('express').Router();

router.use('/circles', require('./circles')); // matches all requests to /api/circles/
router.use('/squares', require('./squares')); // matches all requests to  /api/squares/
router.use('/triangles', require('./triangles')); // matches all requests to  /api/triangles/

// api/rectangles/ ?!?! Get outta town!
router.use(function (req, res, next) {
  const err = new Error("Stop asking for things you can't have.");
  err.status = 404;
  next(err);
});

module.exports = router;
