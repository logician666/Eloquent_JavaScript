#! /usr/bin/env node

require("./code/load")("code/scripts.js", "code/chapter/05_higher_order.js", "code/intro.js");

function dominantDirection(text) {
  counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";})
    .filter(({name}) => name != "none");
  if (counted.length == 0) return 'ltr';
  return counted.reduce((obj1, obj2) => obj1.count > obj2? obj1 : obj2).name;
}

console.log(dominantDirection('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(dominantDirection(''));
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl