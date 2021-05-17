const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('<h1>Check route! Ex: http://localhost3003/api/categories</h1>');
});

module.exports = router;
