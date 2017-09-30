// Description:
// Consider the number 1176 and its square (1176 * 1176) = 1382976. Notice that:
// a) the first two digits of 1176 form a prime.
// b) the first two digits of the square 1382976 form a prime.
// c) the last two digits of 1176 and 1382976 are the same.
// Given two numbers representing a range, how many numbers satisfy this property within that range?
// solve(2,1200) = 1, because only 1176 satisfies this property within the range 2 < n < 1200. See test cases for more examples. The upper bound for the range will not exceed 1,000,000.


function isPrime(number) {
    var start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
}

function solve(a, b) {
    var count = 0;
    for (a; a < b; a++) {
        var sq = (a * a).toString();
        var str = a.toString();
        if (str.slice(-2) == sq.slice(-2) && isPrime(sq.slice(0, 2)) && isPrime(str.slice(0, 2))) {
            console.log(str + " - " + sq + " - " + isPrime(sq.slice(0, 2)));
            count++;
        }
    }
    return count;
}

solve(2, 100000);


