const express = require('express');

const router = express.Router();

router.get('/', function (_req, _res) {
	_res.render('container', {
		title: 'App',
		partials: {content: 'index'}
	});
})

module.exports = router;