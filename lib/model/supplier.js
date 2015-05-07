'use strict';

var mongoose = require('mongoose');

var Supplier = new mongoose.Schema({
    name: String,
    address: String,
    postalCode: String,
    city: String,
    state: String,
    country: String,
    status: String
});

module.exports = mongoose.model('Supplier', Supplier);