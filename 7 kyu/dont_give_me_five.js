function dontGiveMeFive(start, end) {
    var arr = [];

    for (var i = start; i < end; i++) {
        arr.push(i);
    }

    arr = arr.map(function (val) {
        return "" + val
    });

    arr = arr.filter(function (val) {
        for (var i = start; i < end; i++) {
            if(!val.includes('5')) {
                return val
            }
        }
    });
    return arr.length;
}

dontGiveMeFive(1, 9);