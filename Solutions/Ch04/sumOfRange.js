function range(start, end, step = start < end? 1 : -1) { // Automatically choosing step was cheated from the Author
    // Return a sequence {x} defined by x_(i+1) = x_i + step,
    // where start <= x <= end. start and end are both integers.
    // We assume step != 0, start <= end if step > 0 and
    // end <= start if step < 0.
        
    let seq = [];
    // Let c be the number of times we need to add step to
    // start to reach end
    for (let c = Math.ceil((end - start) / step); c-- >= 0; start += step) // The Author went by
    // a simpler loop, but twice for two different cases. Our loop is generic!
        seq.push(start);

    return seq;
}

function sum(seq) {
    let sum = 0;
    for (let el of seq) sum += el;
    return sum;
}

// Testing samples:
console.log(range(10, -3, -3));
console.log(range(0, 0));
console.log(range(10, 0, -2));
console.log(range(0, 10));
console.log(sum(range(0, 10)));