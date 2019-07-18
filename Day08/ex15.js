const { addNewContact, updateContact, deleteContact } = require('./service/mongodb-contact-service');
const { MongoClient, ObjectId } = require('mongodb');

id = "5d2f0201cbc4af3ad071ef31"

const c1 = {
    "_id": ObjectId(id),
    "firstname": "Bandi",
    "lastname": "Shagun",
    "email": "tpurnell0@reuters.com",
    "gender": "Male",
    "phone": "4137421105",
    "address": "80 Aberg Trail",
    "city": "Springfield",
    "state": "Massachusetts",
    "country": "United States",
    "dob": "8/26/1998"
};

// addNewContact(c1)
//     .then(id => console.log(id))
//     .catch(err => console.log(err));

updateContact(c1)
    .then(id => console.log(id))
    .catch(err => console.log(err));

