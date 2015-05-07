'use strict';

var mongoose = require('mongoose');

var Region = new mongoose.Schema({
    title: String
});

module.exports = mongoose.model('Region', Region);