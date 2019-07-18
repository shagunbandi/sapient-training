// Template String
const name = 'Shagun'
const city = 'Indore'
const message = `${name} lives in ${city}`;
console.log(message);

// Arrow Functions


const greet = (name) => `Hello ${name}, how are you today`;
console.log('Greet Function Returned', greet('Shagun'));

// Practical Uses of arrow function
const nums = [10, 22, 23, 21, 45, 65, 34, 67];
let searchNum = 14;
const index = nums.findIndex(n => n === searchNum);
console.log(`${searchNum} is found at index ${index}`);

const evenNums = nums.filter(n => n % 2 === 0);
console.log(evenNums);

const squares = nums.map(n => n * n)
console.log(squares);

const names = ['Bandi', 'Jinda', 'Vaigra'];
const codes = names.map((n, i) => `${n.toUpperCase().substring(0, 3)}-${i}`)
console.log(codes);

// Object Destructuring
const p1 = {
    fullname: 'Shagun',
    phone: '987898767',
    email: 'shag@band.uni'
}
let {fullname, phone, email} = p1;
console.log(fullname, phone, email);

function sayHello({phone, fullname, country="India"}) {
    console.log(`Name: ${fullname}, country: ${country}`);   
}

sayHello(p1)