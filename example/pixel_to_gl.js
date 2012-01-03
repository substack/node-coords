var coord = require('../');
var tr = coord([ [ -1, 1 ], [ -1, 1 ] ], [ 800, 600 ]);
var pos = tr([ 0.1499999999999999, -0.23333333333333328 ]);
console.dir(pos.map(Math.round));
