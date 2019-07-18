const express = require('express');
const process = require('process');
const path = require('path')

const app = express(); // equivalent to http.server
const port = process.env.PORT || 4000

const service = require('./service/mongodb-contact-service')

app.use(express.static(path.join(__dirname, 'www')));

// map http GET request for the URL '/api/contacts/' to respond with JSON 
// representation of contacts using the mongodb-contact-service

const baseUrl = '/api/contacts';
app.get(baseUrl, (req, resp) => {
    service.getAllContacts()
        .then(data => resp.json(data))
})


app.listen(port, () => console.log(`server started at localhost:${port}`));