const readlineSync = require('readline-sync');

const min = (a, b) => a < b? a : b;
// Another expression would be:
// cosnt min = (a, b) = (a < b)*a || b;

console.log(
    min(
        readlineSync.questionInt(),
        readlineSync.questionInt()
    )
)