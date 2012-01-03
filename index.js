module.exports = function (from_, to_) {
    var trans = {
        from : normalize(from_),
        to : normalize(to_),
    };
    
    return function (pos) {
        if (!Array.isArray(pos)) pos = [].slice.call(arguments);
        
        return pos.map(function (p, ix) {
            var from = trans.from[ix];
            var to = trans.to[ix];
            
            return (p - from[0]) / (from[1] - from[0])
                * (to[1] - to[0]) + to[0];
            ;
        });
    };
};

function normalize (coord) {
    if (!Array.isArray(coord)) coord = [ coord ];
    
    for (var i = 0; i < coord.length; i++) {
        if (!Array.isArray(coord[i])) {
            coord[i] = [ 0, coord[i] - 1 ];
        }
    }
    return coord;
} 
