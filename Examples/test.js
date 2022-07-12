// const readline = require('readline').createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });
// const readlineSync = require('readline-sync');

// let yourName;
// let sentinel = 0;
// do {
// 	// the `readline` module of Node.js is asyncronous. We use readline-sync module 
// 	// instead to have a syncronous alternative.
// 	/* yourName = readline.question("What is your name?", name => {
// 	 		console.log('From inside the readline.question method: ' + name);
// 	 		readline.close();
// 	 		return name;
// 	 		});	*/
// 	yourName = readlineSync.question("What is your name? ");
// 	sentinel++;
// 	if (sentinel > 100) break;
// } while (!yourName);

// console.log("Hello, " + yourName);
// console.log(`The sentinel has reached ${sentinel}."`);

let obj1 = 1;
console.log(obj1.titel);
console.log(Object.keys(obj1));
