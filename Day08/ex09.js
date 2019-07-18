const { addNewContacts, getAllContacts, getContactById, deleteContact, updateContact } = require('./service/file-contact-service');

let c1 = {
    _id : 1,
    firstname: "Shagun",
    phone: "99876777665",
    email: "asdjhk@kjhkj.com",
    city: "kasj"
}

// addNewContacts(c1, (err, c)=>{
//     if(err) {
//         console.log("error", err);
//     }
//     console.log(c);
// })

// getAllContacts({
//     sortOrder: 'desc'
// }, (err, data) => {
//     if (err) console.log(err);
//     else console.log(data)
// })

// console.log("1")
// getContactById(7, (err, data) => {
//     if(err) console.log(err)
//     else console.log(data)
// })

// console.log("2")
// deleteContact(7, (err, data) => {
//     if(err) console.log(err)
//     else console.log(data)
// })

updateContact(c1, (err, c)=>{
    if(err) console.log("error", err);
    else console.log(c);
})


updateContact
