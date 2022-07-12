#!/usr/bin/env node

function deepEqual(obj1, obj2) {
    let obj1Type = typeof obj1, obj2Type = typeof obj2;

    if (obj1Type != obj2Type) return false;
    
    if (obj1 == null || obj1Type != 'object') return obj1 === obj2;

    for (let attr of Object.keys(obj1))
        if (! deepEqual(obj1[attr], obj2[attr])) return false;
    
    return true;
};

let person1 = {
    name: 'Logician',
    birthDate: new Date(1996, 5, 7),
    occupation: 'Accountant',
    skill: ['programming', 'math', 'logic', 'music', 'martial arts'],
    knowledge: null
};

let person2 = {};
Object.assign(person2, person1);
person2.knowledge = person1.skill;

let person3 = {};
Object.assign(person3, person1);

console.log(person1, '\n', person2, '\n', person3);

console.log('person1 deeply equal person2 is ' + deepEqual(person1, person2));
console.log('person1 deeply equals person3 is ' + deepEqual(person1, person3));