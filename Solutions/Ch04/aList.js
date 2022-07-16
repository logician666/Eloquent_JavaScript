#! /usr/bin/env node

// We start with the helper function due to their atomicity

function prepend(element, list) {
    return {value: element, rest: list};
} 

// An iterative function of the nth function
function nth(list, n = 0) { 
    // Return the nth element of the given list
    // Default to 0th element if no index is provided
    let pointer = list;
    while (n-- > 0) {
        if (pointer['rest'] == undefined) return undefined;
        pointer = pointer['rest'];
    }
    return pointer['value'];
}

function nthRecursive(list, n = 0) {
    if (n == 0) return list['value'];
    if (list['rest'] == null) return undefined;
    return nthRecursive(list['rest'], n - 1);
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
/* ================================================================================================= */

// We hereby start our testing:

// Test: function prepend
testObj = {'value': 'Hisham', 'rest': null};
console.log(
    `prepend(666, ${JSON.stringify(testObj, undefined, 4)}) = ${JSON.stringify(prepend(666, testObj), undefined, 4)})`
);

console.log('-'.repeat(72));

// Test array defined for the following tests
let array1 = [], array2 = [0], array3 = [0, 1, 2];
let testArrays = [array1, array2, array3];


// Test: function nth
for (array of testArrays)
    console.log(
        `nth(arrayToList(([${array}]), 0) = ${JSON.stringify(nth(arrayToList(array), 0))}`
    );

for (array of testArrays)
    console.log(
        `nth(arrayToList(([${array}]), 1) = ${JSON.stringify(nth(arrayToList(array), 1))}`
    );

for (array of testArrays)
    console.log(
        `nth(arrayToList(([${array}]), 2) = ${JSON.stringify(nth(arrayToList(array), 2))}`
    );

console.log('-'.repeat(72));

// Test: function nthRecursive
for (array of testArrays)
    console.log(
        `nthRecursive(arrayToList(([${array}]), 0) = ${JSON.stringify(nthRecursive(arrayToList(array), 0))}`
    );

for (array of testArrays)
    console.log(
        `nthRecursive(arrayToList(([${array}]), 1) = ${JSON.stringify(nthRecursive(arrayToList(array), 1))}`
    );

for (array of testArrays)
    console.log(
        `nthRecursive(arrayToList(([${array}]), 2) = ${JSON.stringify(nthRecursive(arrayToList(array), 2))}`
    );

console.log('-'.repeat(72));

// Test: function arrayToList
 for (array of testArrays)
    console.log(
        `arrayToList([${array}]) = ${JSON.stringify(arrayToList(array), null, 4)}`
    );

console.log('-'.repeat(72));

// Test: function listToArray
for (array of testArrays)
    console.log(
        `listToArray({${array}}) = ${JSON.stringify(listToArray(arrayToList(array)))}`
    );

console.log('-'.repeat(72));
