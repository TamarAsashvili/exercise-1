
const lodash = require('lodash');

const fs = require('fs');

const people = [
    { name: 'Tamar', age: 38 },
    { name: 'Bruno', age: 44 },
    { name: 'Natalia', age: 25 },
    { name: 'Mariam', age: 7 },
    { name: 'Luna', age: 3 }

];

const peopleByAge = lodash.orderBy(people, ['age'], ['desc']);
const oldPeople = lodash.maxBy(peopleByAge, 'age');

console.log(`The oldest person ${oldPeople.name} is ${oldPeople.age} years.`);

const youngPeople = lodash._.minBy(peopleByAge, 'age');

console.log(`The youngest person ${youngPeople.name} is ${youngPeople.age} years.`);

const getYounger = lodash.remove(peopleByAge, oldPeople);

//console.log(peopleByAge);
console.log(getYounger);

const nPeople = [
    { name: 'savera', age: 7 },
    { name: 'Judy', age: 7 },
    { name: 'nino', age: 7 }
]

const newPeople = peopleByAge.concat(nPeople);
console.log(newPeople);

const groupedByAge = lodash.groupBy(newPeople, (person) => {
    return person.age
});

console.log(groupedByAge);

fs.writeFile('peopal.txt', "", (err) => {
    if (err) {
        console.log('hello from error:', err);
        return;
    }
})

newPeople.forEach(person => {
    fs.appendFile('people.txt', `${person.name} is ${person.age}\n`, (err) => {
        if (err) {
            console.log(Error);
        }
        console.log('written is ok.....');
    })
});
