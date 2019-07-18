const fs = require('fs');
const path = require('path');

const filename = path.join(__dirname, '..', 'Day07', 'ex01.js');

// Depriciated function use fs.stats() instead
fs.exists(filename, (yesNo) => {
    if(yesNo) {
        console.log('File Exists');
        fs.readFile(filename, 'utf-8', (err, data) => {
            if(err){
                console.log("There was an error", err);
            }
            else {
                console.log("data", data);
            }
        });
    }
    else {
        console.log("File Does not Exist");
    }
})