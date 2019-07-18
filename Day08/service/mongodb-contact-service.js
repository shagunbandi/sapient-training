const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb://localhost'
const requiredFields = ['firstname', 'email', 'phone', 'city'];

module.exports.getContactById = async (id) => {
    if (!id || typeof id !== 'string') {
        throw 'id was not supplied or was not a string';
    }
    try {
        const _id = ObjectId(id);
        const conn = await MongoClient.connect(url, { useNewUrlParser: true });
        const contacts = conn.db('trainingdb').collection('contacts');
        const c1 = await contacts.findOne({ _id });
        conn.close();
        return c1;
    }
    catch (err) {
        throw err;
    }

}

module.exports.addNewContact = async (contact) => {
    if (!contact || typeof contact !== 'object') {
        throw 'contact was not supplied or was not an object!';
    }
    const missingFields = [];
    requiredFields.forEach(f => {
        if (!(f in contact)) {
            missingFields.push(f);
        }
    });
    if (missingFields.length) {
        throw 'required fields ' + missingFields.join(', ') + ' missing';
    }
    const conn = await MongoClient.connect(url, { useNewUrlParser: true });
    const contacts = conn.db('trainingdb').collection('contacts');
    const response = await contacts.insertOne(contact);
    conn.close();
    return response.insertedId;
}

module.exports.updateContact = async (contact) => {
    if (!contact || typeof contact !== 'object') {
        throw 'contact was not supplied or was not an object!';
    }
    const missingFields = [];
    const requiredField1 = [...requiredFields, "_id"]
    requiredField1.forEach(f => {
        if (!(f in contact)) {
            missingFields.push(f);
        }
    });
    if (missingFields.length) {
        throw 'required fields ' + missingFields.join(', ') + ' missing';
    }
    const conn = await MongoClient.connect(url, { useNewUrlParser: true });
    const contacts = conn.db('trainingdb').collection('contacts');
    const response = await contacts.findOneAndUpdate({ _id: contact._id }, { $set: contact })
    conn.close();
    return response.value;
}
module.exports.deleteContact = async (id) => {
    if (!id || typeof id !== 'string') {
        throw 'id was not supplied or was not a string';
    }
    try {
        const _id = ObjectId(id);
        const conn = await MongoClient.connect(url, { useNewUrlParser: true });
        const contacts = conn.db('trainingdb').collection('contacts');
        const c1 = await contacts.deleteOne({ _id });
        conn.close();
        return c1;
    }
    catch (err) {
        throw err;
    }

}
module.exports.getAllContacts = async (options = {}) => {
    let {
        pageNum = 1,
        pageSize = 10,
        sortBy = '_id',
        sortOrder = 'asc'
    } = options;

    if ((typeof pageNum !== 'number' || pageNum <= 0 || (typeof pageSize !== 'number' || pageSize <= 0))) {
        throw "pageNum or pageSize not correct"
    }

    const skip = (pageNum - 1) * pageSize;
    const conn = await MongoClient.connect(url, { useNewUrlParser: true });
    const contacts = conn.db('trainingdb').collection('contacts')
    const all_contacts = await contacts.find({}, {
        limit: pageSize,
        skip,
        sort: {
            [sortBy]: sortOrder === 'asc' ? 1 : -1
        }
    }).toArray();
    conn.close();
    return all_contacts;


}