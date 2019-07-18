// This module name is the name of the file

// This function is a local(private) member of this member
function greet(name='friend', city='your city') {
    console.log(`Hello ${name}, how's weather in ${city}`);
}

greet();
greet('Bndi');
greet("Bandi", 'Indore')

module.exports = greet;