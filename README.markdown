coord
=====

Transform coordinates.

example
=======

gl_to_pixel.js
--------------

``` js
var coord = require('coord');
var tr = coord([ 800, 600 ], [ [ -1, 1 ], [ -1, 1 ] ]);
var pos = tr(460, 230);
console.dir(pos);
```

output:

```
[ 0.1499999999999999, -0.23333333333333328 ]
```

flip.js
-------

To flip the coordinates, just put the bigger number first:

``` js
var coord = require('coord');
var tr = coord([ 800, 600 ], [ [ 1, -1 ], [ -1, 1 ] ]);
var pos = tr(460, 230);
console.dir(pos);
```

output:

```
[ -0.1499999999999999, -0.23333333333333328 ]
```

pixel_to_gl.js
--------------

``` js
var coord = require('coord');
var tr = coord([ [ -1, 1 ], [ -1, 1 ] ], [ 800, 600 ]);
var pos = tr([ 0.1499999999999999, -0.23333333333333328 ]);
console.dir(pos.map(Math.round));
```

output:

```
[ 460, 230 ]
```
