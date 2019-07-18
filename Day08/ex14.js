const { getContactById, deleteContact, getAllContacts } = require('./service/mongodb-contact-service');

const id = '5d2f0201cbc4af3ad071ef31';

// getContactById(id)
//     .then(data => console.log(data))
//     .catch(err => console.log('error --> ', err));


// deleteContact(id)
//     .then(id => console.log("success"))
//     .catch(err => console.log(err));

// getAllContacts({sortBy: 'firstname'})
//     .then(all_conts => console.log(all_conts))
//     .catch(err => console.log(err))