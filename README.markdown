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

methods
=======

var coord = require('coord')

var tr = coord(from, to)
------------------------

Return a coordinate transform function `tr` mapping coordinates specified in
`from` to coordinates specified in `to`.

Each element in `from` and `to` represents a coordinate transform on a
dimension. 

Coordinate transforms can be arrays or numbers. Each number `x` in a coordinate
transform is treated as `[ 0, x - 1 ]`.

tr(pos)
-------

tr(x, y, ...)
-------------

Shorthand for `tr([ x, y, ... ])`.


