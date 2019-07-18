// module: services/file-contacts-service
const fs = require('fs');
const path = require('path');
const filename = path.join(__dirname, 'contacts.json');

let data = []
if (fs.existsSync(filename)) {
    data = JSON.parse(fs.readFileSync(filename, 'utf8'));
}

const requiredField = ['firstname', 'email', 'phone', 'city'];

class ContactService {
    constructor() {

    }

    // Our Async function
    getAllContacts(options, callbackFn) {
        if (!callbackFn || typeof callbackFn != 'function') {
            throw new Error('callbackFn was not supplied appropriately');
        }

        setTimeout(() => {
            let {
                pageNum = 1,
                pageSize = 10,
                sortBy = '_id',
                sortOrder = 'asc'
            } = options;

            if ((typeof pageNum !== 'number' || pageNum <= 0 || (typeof pageSize !== 'number' || pageSize <= 0))) {
                callbackFn({
                    code: 1000,
                    msg: 'pageNum or pageSize not correct'
                })
                return;
            }

            let data_copy = [...data];

            var ret = 0;
            if (sortOrder === 'asc') {
                ret = 1;
            }
            else if (sortOrder === 'desc') {
                ret = -1;
            }
            else {
                callbackFn({
                    code: 1002,
                    msg: "Bad Input: sortOrder"
                })
                return;
            }

            let properties = Object.keys(data[0]);
            if (properties.findIndex(c => c === sortBy) === -1) {
                callbackFn({
                    code: 1003,
                    msg: "Key Not Found"
                })
                return -1;
            }

            data_copy.sort((a, b) => {

                if (a[sortBy] > b[sortBy]) {
                    return ret;
                }
                else {
                    return -ret;
                }
            })

            console.log("Im Here")
            const begin = (pageNum - 1) * pageSize;
            const end = begin + pageSize;
            const newData = data_copy.slice(begin, end);
            callbackFn(null, newData);

        }, 0)

    }

    addNewContacts(contact, callbackFn) {
        if (!callbackFn || typeof callbackFn != 'function') {
            throw new Error('callbackFn was not supplied appropriately');
        }

        // To make our function as asynchronous from this point forward, 
        // we use the setTimeout, builtin asynchronous function with a 
        // delay of 0
        setTimeout(() => {
            if (!contact || typeof contact !== 'object') {
                err = {
                    code: 1001,
                    msg: "contact was not supplied or was not an object"
                }
                callbackFn(err);
                return;
            }

            const missingValues = [];
            requiredField.forEach(f => {
                if (!(f in contact)) {
                    missingValues.push(f);
                }
            })

            if (missingValues.length) {
                err = {
                    code: 1002,
                    msg: "Following field(s) are missing: " + missingValues.join(', ')
                }
                callbackFn(err);
                return;
            }

            // generate ID
            if (!data.length) {
                contact._id = 1;
            }
            else {
                contact._id = Math.max(...data.map(c => c._id)) + 1;
            }
            data.push(contact);
            fs.writeFile(filename, JSON.stringify(data), (err) => {
                if (err) {
                    err1 = {
                        code: 1003,
                        msg: err
                    }
                    callbackFn(err1);
                    return;
                };
            })
            callbackFn(null, { ...contact });

        }, 0)
    }

    getContactById(_id, callbackFn) {
        if (!callbackFn || typeof callbackFn != 'function') {
            throw new Error('callbackFn was not supplied appropriately');
        }

        setTimeout(() => {
            if (typeof _id !== 'number' || _id <= 0) {
                callbackFn({
                    code: 1002,
                    msg: '_id or pageSize not correct'
                })
            }

            const index = data.findIndex(c => c._id === _id);
            if (index === -1) {
                callbackFn(null, null);
                return;
            }
            callbackFn(null, { ...data[index] })
            return;
        }, 0)

    }

    deleteContact(_id, callbackFn) {

        if (!callbackFn || typeof callbackFn != 'function') {
            throw new Error('callbackFn was not supplied appropriately');
        }

        setTimeout(() => {
            const index = data.findIndex(c => c._id == _id);
            if (index == -1) {
                callbackFn(null, null);
                return;
            }

            const deleted = data.splice(index, 1);

            fs.writeFile(filename, JSON.stringify(data), (err) => {
                if (err) {
                    err1 = {
                        code: 1003,
                        msg: err
                    }
                    callbackFn(err1);
                    return;
                };
            })

            callbackFn(null, ...deleted);

        }, 0)

    }

    updateContact(contact, callbackFn) {

        if (!callbackFn || typeof callbackFn != 'function') {
            throw new Error('callbackFn was not supplied appropriately');
        }

        setTimeout(() => {

            if (!contact || typeof contact !== 'object') {
                err = {
                    code: 1001,
                    msg: "contact was not supplied or was not an object"
                }
                callbackFn(err);
                return;
            }
            const requiredField1 = [...requiredField]
            requiredField1.push('_id');
            const missingValues = [];
            requiredField1.forEach(f => {
                if (!(f in contact)) {
                    missingValues.push(f);
                }
            })

            if (missingValues.length) {
                let err = {
                    code: 1002,
                    msg: "Following field(s) are missing: " + missingValues.join(', ')
                }
                callbackFn(err);
                return;
            }


            const index = data.findIndex(c => c._id == contact._id);
            if (index == -1) {
                callbackFn(null, null);
                return;
            }
            data[index] = contact;

            fs.writeFile(filename, JSON.stringify(data), (err) => {
                if (err) {
                    err1 = {
                        code: 1003,
                        msg: err
                    }
                    callbackFn(err1);
                    return;
                };
            })

            callbackFn(null, contact);

        }, 0)

    }
}

module.exports = new ContactService();