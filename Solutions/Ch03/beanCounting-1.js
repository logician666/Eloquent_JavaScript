function countBs(str) {
    let c = 0;
    for (let i = 0; i < str.length; c += str[i++] == 'B');
    return c;
}

console.log(
    countBs('Because noBody wants to see the Bloodshed..., ')
);