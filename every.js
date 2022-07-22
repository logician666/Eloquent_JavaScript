#! /usr/bin/env node

/* function every (array, predicate) {
    for (let element of array) 
        if (!predicate(element)) return false;
    return true;
}*/

function every (array, predicate) {
    predicateN = element => !predicate(element);
    return !array.some(predicateN);
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true