'use strict';

var mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router(),
    ABBSupplierModel = require('../model/abbSupplier');

router.get('/', function(request, response) {
    return ABBSupplierModel.find(function(err, suppliers) {
        if(!err) {
            return response.send(suppliers);
        } else {
            return console.log(err);
        }
    });
});

router.post('/', function(request, response) {
    var supplier = new ABBSupplierModel({
        unit: request.body.unit,
        company: request.body.company
    });

    supplier.save(function(err) {
        if(!err) {
            console.log('ABBSupplier created');
        } else {
            console.log(err);
        }
        return response.send(supplier);
    });
});

router.get('/:id', function(request, response) {
    return ABBSupplierModel.findById(function(err, supplier) {
        if(!err) {
            return response.send(supplier);
        } else {
            return console.log(err);
        }
    });
});

router.put('/:id', function(request, response) {
    console.log('Updating ABBSupplier with name: ' + request.body.unit);

    return ABBSupplierModel.findById(function(err, supplier) {
        supplier.unit = request.body.unit;
        supplier.company = request.body.company;

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
    console.log('Removing ABBSupplier with id: ' + request.params.id);

    return ABBSupplierModel.findById(request.params.id, function(err, supplier) {
        return supplier.remove(function(err) {
            if(!err) {
                console.log('ABBSupplier removed');
                return response.send('');
            } else {
                console.log(err);
            }
        });
    })
});

module.exports = router;