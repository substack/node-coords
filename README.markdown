coords
======

Transform coordinates.

example
=======

gl_to_pixel.js
--------------

``` js
var coords = require('coords');
var tr = coords([ 800, 600 ], [ [ -1, 1 ], [ -1, 1 ] ]);
var pos = tr(460, 230);
console.dir(pos);
```

output:

```
[ 0.15143929912390486, -0.23205342237061766 ]
```

flip.js
-------

To flip the coordinates, just put the bigger number first:

``` js
var coords = require('coords');
var tr = coords([ 800, 600 ], [ [ 1, -1 ], [ -1, 1 ] ]);
var pos = tr(460, 230);
console.dir(pos);
```

output:

```
[ -0.15143929912390486, -0.23205342237061766 ]
```

pixel_to_gl.js
--------------

``` js
var coords = require('coords');
var tr = coords([ [ -1, 1 ], [ -1, 1 ] ], [ 800, 600 ]);
var pos = tr([ 0.15143929912390486, -0.23205342237061766 ]);
console.dir(pos);
```

output:

```
[ 460, 230 ]
```

methods
=======

var coords = require('coords')

var tr = coords(from, to)
-------------------------

Return a coordinate transform function `tr` mapping coordinates specified in
`from` to coordinates specified in `to`.

Each 2-element array `x` in `from` and `to` represents a coordinate transform on
a dimension in the range `x[0]` to `x[1]`, inclusive.

Any element `x` in `from` or `to` that is not an array will be treated as the
array `[ 0, x - 1 ]`.

tr(pos)
-------

Transform the coordinate array `pos` given the `from` and `to` specified earlier
in `coords(from, to)`.

tr(x, y, ...)
-------------

Shorthand for `tr([ x, y, ... ])`.

install
=======

With [npm](http://npmjs.org) do:

```
npm install coords
````

test
====

With [npm](http://npmjs.org) do:

```
npm test
```

license
=======

MIT/X11
