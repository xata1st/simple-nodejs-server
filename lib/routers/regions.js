'use strict';

var mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router(),
    RegionModel = require('../model/region');

router.get('/', function(request, response) {
    return RegionModel.find(function(err, regions) {
        if(!err) {
            return response.send(regions);
        } else {
            return console.log(err);
        }
    });
});

//router.post('/', function(request, response) {
//    var region = new RegionModel({
//        title: request.body.title
//    });
//
//    region.save(function(err) {
//        if(!err) {
//            response.send(region);
//        } else {
//            return console.log(err);
//        }
//    });
//});

//RegionModel.find(function(err, regions) {
//    if(!err) {
//        if(regions.length === 0) {
//            var region = new RegionModel({
//                title: 'Asia, Middle East and Africa'
//            });
//
//            region.save(function(err) {
//                if(!err) {
//                    console.log('Add region with title: ' + region.title);
//                }
//            });
//        }
//    }
//});

module.exports = router;