jQuery.get('/api/suppliers', function(data, textStatus, jqXHR) {
    console.log('Get response:');
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});

jQuery.ajax({
    url: '/api/suppliers/552e4ccd3ada3d8014000002',
    type: 'GET',
    success: function(data, textStatus, jqXHR) {
        console.log('Post response');
        console.dir(data);
        console.log(textStatus);
        console.dir(jqXHR);
    }
});

jQuery.ajax({
    url: '/api/suppliers/552e4ccd3ada3d8014000002',
    type: 'PUT',
    data: {
        'title': 'JavaScript the good parts',
        'author': 'The legendary Douglas Crockford',
        'releaseDate': new Date(2008, 4, 1).getTime()
    },
    success: function(data, textStatus, jqXHR) {
        console.log('Post response');
        console.dir(data);
        console.log(textStatus);
        console.dir(jqXHR);
    }
});

jQuery.post('/api/suppliers', {
    'name': 'Siarhei Vlasko',
    'address': 'Adamkovskaya',
    'postalCode': '224000',
    'city': 'Brest',
    'state': 'Brestskaya oblast',
    'country': 'Belarus',
    'status': 'fine'
}, function(data, textStatus, jqXHR) {
    console.log('Post response');
    console.dir(data);
    console.log(textStatus);
    console.dir(jqXHR);
});