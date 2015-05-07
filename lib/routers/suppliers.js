'use strict';

var mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router(),
    SupplierModel = require('../model/supplier');

router.get('/', function(request, response) {
    return SupplierModel.find(function(err, suppliers) {
        if(!err) {
            return response.send(suppliers);
        } else {
            return console.log(err);
        }
    });
});

router.post('/', function(request, response) {
    var supplier = new SupplierModel({
        name: request.body.name,
        address: request.body.address,
        postalCode: request.body.postalCode,
        city: request.body.city,
        state: request.body.state,
        country: request.body.country,
        status: request.body.status
    });

    supplier.save(function(err) {
        if(!err) {
            console.log('Supplier created');
        } else {
            console.log(err);
        }
        return response.send(supplier);
    });
});

router.get('/:id', function(request, response) {
    return SupplierModel.findById(function(err, supplier) {
        if(!err) {
            return response.send(supplier);
        } else {
            return console.log(err);
        }
    });
});

router.put('/:id', function(request, response) {
    console.log('Updating supplier with name: ' + request.body.name);

    return SupplierModel.findById(function(err, supplier) {
        supplier.name = request.body.name;
        supplier.address = request.body.address;
        supplier.postalCode = request.body.postalCode;
        supplier.city = request.body.city;
        supplier.state = request.body.state;
        supplier.country = request.body.country;
        supplier.status = request.body.status;

        supplier.save(function(err) {
            if(!err) {
                return response.send(supplier);
            } else {
                console.log(err);
            }
        });
    });
});

router.delete('/:id', function(request, response) {
    console.log('Removing supplier with id: ' + request.params.id);

    return SupplierModel.findById(request.params.id, function(err, supplier) {
        return supplier.remove(function(err) {
            if(!err) {
                console.log('Supplier removed');
                return response.send('');
            } else {
                console.log(err);
            }
        });
    })
});

module.exports = router;