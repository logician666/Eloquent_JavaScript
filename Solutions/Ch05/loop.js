#! /usr/bin/env node

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

loop(1, n => n < 10, n => n + 1, console.log);
loop(3, n => n > 0, n => n - 1, console.log);