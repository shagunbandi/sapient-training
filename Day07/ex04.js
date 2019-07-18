// import specific module from the module
// ES6 Style
// import {getAllContacts, getContactById} from './services/array-contact-service'

const getAllContacts = require('./services/array-contact-service').getAllContacts;
const getContactById = require('./services/array-contact-service').getContactById;
const createNewContact = require('./services/array-contact-service').createNewContact;
const deleteContact = require('./services/array-contact-service').deleteContact;

// const contacts = getAllContacts(1, 3, 'id', 'desc');
// console.log(contacts)

// createNewContact(
//     {
//         "city": "Bangalore",
//         "picture": "https://avatars3.githubusercontent.com/u/14976510?s=460&v=4",
//         "lastname": "Kumar",
//         "phone": "9870987089",
//         "email": "vinod@vinod.co",
//         "dob": "1974-01-20",
//         "address": "1st cross 1st main ISRO layout",
//         "id": 101
//     }
// )

console.log(deleteContact(122));


// const c1 = getContactById(23);
// console.log(c1);