let p1 = {
    name: "Shagun",
    email: 'sha@gun.bandi',
    phone: '9876543212',
    city: 'Indore'
};

let nums = [10, 20, 30, 40, 50];

let p2 = { city:'Bangi', ...p1, email:' shabandi@gmail.com'}
// p2.email = 'asdan@.dascvm';

console.log(p1);
console.log(p2);

let[a, b, ...c] = nums;
console.log(a, b, c);

let {name, ...p3} = p1;
console.log(name, p3);

let newArray = [...nums, 123, 1213,1231244, ...c]
console.log(newArray);
