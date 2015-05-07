'use strict';

var application_root = __dirname,
    express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    mongoose = require('mongoose'),
    books = require(application_root + '/lib/routers/books'),
    suppliers = require(application_root + '/lib/routers/suppliers'),
    abbSuppliers = require(application_root + '/lib/routers/abbSuppliers'),
    regions = require(application_root + '/lib/routers/regions');


var app = express();

app.use(express.static(path.join(application_root, 'site')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = 4711;

app.listen(port, function() {
    console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

app.get('/api', function(request, response) {
    response.send('Library API is running');
});

app.use('/api/books', books);
app.use('/api/suppliers', suppliers);
app.use('/api/abbsuppliers', abbSuppliers);
app.use('/api/regions', regions);

mongoose.connect('mongodb://localhost/library_database');

app.use(express.static(path.join(application_root, 'site')));
