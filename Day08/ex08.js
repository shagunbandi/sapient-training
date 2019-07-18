const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, 'names.txt');

const names = `Shagun
Bandi
vaibhaw
Agrawal 
Jinal
Akshat
`;

fs.writeFile(filename, names, {flag: 'a'}, (err) => {
    if(err) {
        throw err;
    }
    console.log("Names written in File");
})

const more_names = `Yogi
Yogesh`


console.log('End Of Script!');