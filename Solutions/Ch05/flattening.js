#! /usr/bin/env node

function flatten(tree) { // tree: array
    return tree.reduce(
        (array, element) => {
            if (Array.isArray(element))
                return array.concat(flatten(element));
            return array.concat(element);
        },
        []
    )
}

console.log(flatten([]));
console.log(flatten(
    [1, 2, [3], [4, 5], [[6], [7, 8]]]
));
console.log(flatten(
    [[1, 2, 3], [4, 5], [6]]
));