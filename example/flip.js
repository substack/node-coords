var coords = require('../');
var tr = coords([ 800, 600 ], [ [ 1, -1 ], [ -1, 1 ] ]);
var pos = tr(460, 230);
console.dir(pos);
