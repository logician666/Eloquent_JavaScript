#!/usr/bin/env node

// We assume this a costly solution
// function reverseArray(array) { 
//     let reversed = []
//     for (let element of array) reversed.unshift(element);
//     return reversed;
// }

function reverseArray(array) {
    let reversed = [];
    for (let i = array.length - 1; i >= 0; i--) reversed.push(array[i]);
    return reversed;
}

function reverseArrayInPlace(array) {
    let tmp, j;
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        j = array.length - 1 - i;
        tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;
    }
}


testArray = [1, 2, 3, 4, 5]
console.log(
    testArray , '\n' ,
    reverseArray(testArray) , '\n' ,
    testArray , '\n'
);

reverseArrayInPlace(testArray);

console.log(testArray);

console.log(reverseArray(["A", "B", "C"]));
