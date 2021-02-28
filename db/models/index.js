// All data base models

const User = require('./user');
const Account = require('./account');
const Transaction = require('./transaction');

const domain = {
    User,
    Account,
    Transaction
};

require('./associations')(domain);

module.exports = domain;