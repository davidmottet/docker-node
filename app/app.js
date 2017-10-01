const express = require('express')
const app = express()

app.get('/', function (_req, _res) {
	_res.send('Hello World!')
})

app.listen(80, function () {
	console.log('Example app listening on port 80!')
})


module.exports = app;