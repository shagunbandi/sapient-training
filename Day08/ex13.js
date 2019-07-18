const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

const getOneContact = async () => {
    const conn = await MongoClient.connect(url, { useNewUrlParser: true });
    const contacts = conn.db('trainingdb').collection('contacts');
    const contact = await contacts.findOne();
    console.log(contact)
    conn.close();
}

getOneContact()
    .then(() => console.log('Done'))
    .catch(err => console.log(err));

console.log("End oF Script");

// MongoClient.connect(url, (err, conn) => {
//     if (err) throw err;
//     const db = conn.db('trainingdb');
//     const contacts = db.collection('contacts');
//     contacts.findOne((err, c1) => {
//         conn.close();
//         if (err) throw err;
//         console.log(c1)
//     })
// })