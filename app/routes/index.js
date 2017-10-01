const express = require('express');

const router = express.Router();

router.get('/', function (_req, _res) {
	_res.render('index', { title: 'App' });
})

module.exports = router;