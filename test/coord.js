var test = require('tap').test;
var coord = require('../');

test('pixel to gl', function (t) {
    var tr = coord([ 400, 300 ], [ [ -1, 1 ], [ -1, 1 ] ]);
    t.deepEqual(tr(0, 0), [ -1, -1 ], 'bottom left');
    t.deepEqual(tr(200, 150), [ 0, 0 ], 'origin');
    t.deepEqual(tr([ 200, 150 ]), [ 0, 0 ], 'origin array');
    t.deepEqual(tr(400, 0), [ 1, -1 ], 'bottom right');
    t.end();
});

test('3d', function (t) {
    var tr = coord([ 10, 10, 10 ], [ 1, 1, 1 ]);
    t.deepEqual(tr(3, 4, 5), [ 0.3, 0.4, 0.5 ], '3 4 5');
    t.end();
});
