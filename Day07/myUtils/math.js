// module name relative to Day07 is
// ./myUtils/Math

// module.export by default is equal to {}
// to which we can add one or more properties

module.exports.AUTHOR_NAME = 'Shagun Bandi'
module.exports.AUTHOR_EMAIL = ['sabgm' ,'sbcgc'];

module.exports.factorial = (num) => {
    if (num <= 1) return 1;
    else return num * this.factorial(num - 1);
}

module.exports.square = (num) => num*num;
module.exports.cube = (num) => num * num * num;