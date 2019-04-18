const 
	express = require('express'),
	path = require('path'),
	logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
