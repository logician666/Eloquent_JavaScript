#! /usr/bin/env node

require("./code/load")("code/scripts.js", "code/chapter/05_higher_order.js", "code/intro.js");

function textDirectons(text) {
  return countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";})
  .filter(({direction}) => direction != "none")
  .reduce((obj1, obj2) => obj1.count > obj2? obj1 : obj2);
}

console.log(textDirectons('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
