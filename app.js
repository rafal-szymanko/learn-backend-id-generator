const os = require('os');
const fs = require('fs');


const gender = ['M', 'F'];
const maleFirstName = ['John', 'Bruce', 'Shane', 'Archie', 'Gary', 'Charles'];
const femaleFirstName = ['Hannah', 'Courtney', 'Emily ', 'Nadia', 'Maddie', 'Connie'];
const lastName = ['Graham', 'King', 'McCann', 'Parker', 'Wright', 'Reid'];

const people = [];

const randChoice = (data) => {
    const index = Math.floor(Math.random() * data.length);
    return data[index];
}


for (let i = 1; i <= 20; i++) {
    const randGender = randChoice(gender);
    let randFirstName = '';
    const randLastName = randChoice(lastName);
    const randAge = Math.floor(Math.random() * (78 - 18 + 1) + 18);

    if (randGender === 'M') {
        randFirstName = randChoice(maleFirstName);
    } else {
        randFirstName = randChoice(femaleFirstName);
    };

    const randEmail = `${randFirstName}.${randLastName}@gmail.com`;

    const personalData = {
        id: i,
        gender: randGender,
        firstName: randFirstName,
        lastName: randLastName,
        age: randAge,
        email: randEmail.toLowerCase(),
    };
    people.push(personalData);
};

fs.writeFile('data.json', JSON.stringify(people), 'utf8', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});