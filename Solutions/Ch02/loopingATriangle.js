// for (let i = 0; i < 8; i++) {
// 	let line = '';
// 	for (let j = 0; j < i; j++)
// 		line += '#';
// 	console.log(line);
// };

// The author's solution
for (let line = '#'; line.length < 8; line += '#') console.log(line);	
