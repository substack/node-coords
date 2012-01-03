var test = require('tap').test;
var coord = require('../');

test('pixel to gl', function (t) {
    var tr = coord([ 400, 300 ], [ [ -1, 1 ], [ -1, 1 ] ]);
    t.deepEqual(tr(0, 0), [ -1, -1 ], 'bottom left');
    t.deepEqual(tr(199, 149), [ 0, 0 ], 'origin');
    t.deepEqual(tr([ 199, 149 ]), [ 0, 0 ], 'origin array');
    t.deepEqual(tr(399, 0), [ 1, -1 ], 'bottom right');
    t.end();
});

test('pixel to flip gl', function (t) {
    var tr = coord([ 400, 300 ], [ [ 1, -1 ], [ 1, -1 ] ]);
    t.deepEqual(tr(0, 0), [ 1, 1 ], 'bottom left');
    t.deepEqual(tr(200, 150), [ 0, 0 ], 'origin');
    t.deepEqual(tr([ 200, 150 ]), [ 0, 0 ], 'origin array');
    t.deepEqual(tr(400, 0), [ -1, 1 ], 'bottom right');
    t.end();
});

test('gl to pixel', function (t) {
    var tr = coord([ [ -1, 1 ], [ -1, 1 ] ], [ 400, 300 ]);
    t.deepEqual(tr(-1, -1), [ 0, 0 ], 'bottom left');
    t.deepEqual(tr(0, 0), [ 200, 150 ], 'origin');
    t.deepEqual(tr(1, -1), [ 400, 0 ], 'bottom right');
    t.end();
});

test('flip gl to pixel', function (t) {
    var tr = coord([ [ 1, -1 ], [ 1, -1 ] ], [ 400, 300 ]);
    t.deepEqual(tr(1, 1), [ 0, 0 ], 'bottom left');
    t.deepEqual(tr(0, 0), [ 199, 149 ], 'origin');
    t.deepEqual(tr(-1, 1), [ 399, 0 ], 'bottom right');
    t.end();
});

test('3d', function (t) {
    var tr = coord([ 10, 10, 10 ], [ 1, 1, 1 ]);
    t.deepEqual(tr(3, 4, 5), [ 0.3, 0.4, 0.5 ], '3 4 5');
    t.end();
});
