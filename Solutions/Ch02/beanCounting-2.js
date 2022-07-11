function countChar(char) {
    return (str) => {
        let c = 0;
        for (let i = 0; i < str.length; c += str[i++] == char);
        return c;
    }
}

const countBs = countChar('B');

console.log(
    countBs('Because noBody wants to see the Bloodshed..., ')
);