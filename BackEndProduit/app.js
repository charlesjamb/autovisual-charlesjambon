const express = require('express');
const path = require('path');
const formidable = require('formidable');
const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/upload', function(req, res){
  let form = new formidable.IncomingForm();
  form.multiples = true;

  form.uploadDir = path.join(__dirname, '/upload');

  form.on('file', function(field, file) {
		fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', function() {
    res.end('success');
  });

  form.parse(req);
});

app.listen(8080, function() {
	console.log('app started on port 8080');
});