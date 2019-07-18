const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, {useNewUrlParser: true})
    .then(conn => conn.db('trainingdb'))
    .then(db => db.collection('contacts'))
    .then(contacts => contacts.findOne())
    .then(oneContact => console.log(oneContact))
    .catch(err => console.log(err))