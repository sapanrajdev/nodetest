const router = require('express').Router({ mergeParams: true });

const first = require('./components/first');

router.use('/first', first);

module.exports = router;
