'use strict';

var mongoose = require('mongoose');

var ABBSupplier = new mongoose.Schema({
    unit: String,
    company: String
});

var ABBSupplierModel = mongoose.model('ABBSupplier', ABBSupplier);