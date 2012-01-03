var test = require('tap').test;
var coords = require('../');

test('pixel to gl', function (t) {
    var tr = coords([ 400, 300 ], [ [ -1, 1 ], [ -1, 1 ] ]);
    t.deepEqual(tr(0, 0), [ -1, -1 ], 'bottom left');
    t.deepEqual(tr(199.5, 149.5), [ 0, 0 ], 'origin');
    t.deepEqual(tr([ 199.5, 149.5 ]), [ 0, 0 ], 'origin array');
    t.deepEqual(tr(399, 0), [ 1, -1 ], 'bottom right');
    t.end();
});

test('pixel to flip gl', function (t) {
    var tr = coords([ 400, 300 ], [ [ 1, -1 ], [ 1, -1 ] ]);
    t.deepEqual(tr(0, 0), [ 1, 1 ], 'bottom left');
    t.deepEqual(tr(199.5, 149.5), [ 0, 0 ], 'origin');
    t.deepEqual(tr([ 199.5, 149.5 ]), [ 0, 0 ], 'origin array');
    t.deepEqual(tr(399, 0), [ -1, 1 ], 'bottom right');
    t.end();
});

test('gl to pixel', function (t) {
    var tr = coords([ [ -1, 1 ], [ -1, 1 ] ], [ 400, 300 ]);
    t.deepEqual(tr(-1, -1), [ 0, 0 ], 'bottom left');
    t.deepEqual(tr(0, 0), [ 199.5, 149.5 ], 'origin');
    t.deepEqual(tr(1, -1), [ 399, 0 ], 'bottom right');
    t.end();
});

test('flip gl to pixel', function (t) {
    var tr = coords([ [ 1, -1 ], [ 1, -1 ] ], [ 400, 300 ]);
    t.deepEqual(tr(1, 1), [ 0, 0 ], 'bottom left');
    t.deepEqual(tr(0, 0), [ 199.5, 149.5 ], 'origin');
    t.deepEqual(tr(-1, 1), [ 399, 0 ], 'bottom right');
    t.end();
});

test('3d', function (t) {
    var tr = coords(
        [ [ 0, 10 ], [ 0, 10 ], [ 0, 10 ] ],
        [ [ 0, 1 ], [ 0, 1 ], [ 0, 1 ] ]
    );
    t.deepEqual(tr(3, 4, 5), [ 0.3, 0.4, 0.5 ], '3 4 5');
    t.end();
});
