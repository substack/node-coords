var coords = require('../');
var tr = coords([ [ -1, 1 ], [ -1, 1 ] ], [ 800, 600 ]);
var pos = tr([ 0.15143929912390486, -0.23205342237061766 ]);
console.dir(pos);
