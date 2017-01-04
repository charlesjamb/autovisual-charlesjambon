const express = require(`express`);
const path = require(`path`);
const formidable = require(`formidable`);
const fs = require(`fs`);

const app = express();

app.get(`/`, function(req, res) {
	res.send(`Hello, world!`);
});

app.listen(8080, function() {
	console.log(`app started on port 8080`);
});