#! /usr/bin/env node

// We start with the helper function due to their atomicity

function prepend(el, list) {
    return {value: el, rest: list};
} 

function nth(list, i = 0) { // Default to 0th element if no index is provided
    let pointer = list;
    for (let j = 0; j < i; j++) {
        if (pointer['rest'] == undefined) break;
        pointer = pointer['rest'];
    }
    
    return pointer['value'];
}

// ToDo: write a recursive version of the nth function above
function nthRecursive(list, i = 0) {
    if (i == 0) return list['value'];
    if (list['rest'] == null) return undefined;
    return nthRecursive(list['rest'], i - 1);
}

// A preliminary solution:
/* function arrayToList(array) {
    let list = {}, pointer = list;
    for (let el of array) {
        pointer['value'] = el;
        pointer['rest'] = {}; 
        pointer = pointer['rest'];
    };

    return list;
}*/

// A more elegant solution:
function arrayToList(array) {
    let list = {rest: {}}, pointer = list;
    // We belive that pointer should be pointing to objects rather than a 
    // single attribute (i.e., rest) to allow for better fine control over
    // newly-constructed and added objects 
    for (let el of array) {
        pointer['rest'] = {value: el, rest: null};
        pointer = pointer['rest'];
    }; 

    return list['rest'];
}

function listToArray(list) {
    let array = [], pointer = 'rest' in list? list : undefined;

    while(pointer) {
        array.push(pointer['value']);
        pointer = pointer['rest'];
    };

    return array;
}

// We hereby start our testing
let array1 = [], array2 = [1], array3 = [1, 2, 3];

console.log(JSON.stringify(arrayToList(array1)));
console.log(JSON.stringify(arrayToList(array2)));
console.log(JSON.stringify(arrayToList(array3)));

console.log('-'.repeat(72));

console.log(JSON.stringify(listToArray(arrayToList(array1))));
console.log(JSON.stringify(listToArray(arrayToList(array2))));
console.log(JSON.stringify(listToArray(arrayToList(array3))));

console.log('-'.repeat(72));

console.log(nth(arrayToList(array1), 0));
console.log(nth(arrayToList(array1), 2));
console.log(nth(arrayToList(array3), 0));
console.log(nth(arrayToList(array3), 1));
console.log(nth(arrayToList(array3), 2));

console.log('-'.repeat(72));

console.log(nthRecursive(arrayToList(array1), 0));
console.log(nthRecursive(arrayToList(array1), 2));
console.log(nthRecursive(arrayToList(array2), 0));
console.log(nthRecursive(arrayToList(array3), 0));
console.log(nthRecursive(arrayToList(array3), 1));
console.log(nthRecursive(arrayToList(array3), 2));