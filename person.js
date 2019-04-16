
const lodash = require('lodash');

const fs = require('fs');

const avengers = [
    {name: 'Tony Stark', age: 54},
    {name: 'Steve Rogers', age: 95},
    {name: 'Natasha Romanov', age: 36},
    {name: 'Bruce Banner', age: 45},
    {name: 'Thor Odinson', age: 3500},
    {name: 'Peter Parker', age: 18},
    {name: 'Steven Strange', age: 43},
    {name: 'Scott Lang', age: 34},
    {name: 'Nick Fury', age: 72},
    {name: 'Carol Denvers', age: 42}
    
];

const avengersByAge = lodash.orderBy(avengers, ['age'], ['desc']);

console.log(avengersByAge);

const oldestAvenger = lodash.maxBy(avengersByAge, 'age');

console.log(`The oldest avenger is ${oldestAvenger.name} with ${oldestAvenger.age} years of age`);

const youngestAvenger = lodash._.minBy(avengersByAge, 'age');

console.log(`The youngest avenger is ${youngestAvenger.name} with ${youngestAvenger.age} years of age`);

const getYounger = lodash.remove(avengersByAge, oldestAvenger);
    
console.log(avengersByAge);
console.log(getYounger);

const recruit = [
    {name: 'Cyclops', age: 18},
    {name: 'Gene', age: 18},
    {name: 'Mystiqoe', age:18}
]

const newAvengers = avengersByAge.concat(recruit);
console.log(newAvengers);

const groupedByAge = lodash.groupBy(newAvengers, (avenger) => {return avenger.age});

console.log(groupedByAge);

fs.writeFile('text.txt',"" ,(err) => {
    if (err) throw err;
})

newAvengers.forEach(avenger => {
    fs.appendFile('text.txt', `${avenger.name} is ${avenger.age}\n`, (err) => {
        if(err) {
            console.log(err);
        }
        console.log('its written');
    })
});
