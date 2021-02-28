module.exports = function (domain) {
    // ----------- User---------------------

    domain.User.hasMany(domain.Account, {
        foreignKey: 'userId',
    });

    // -----------Account-----------------
    domain.Account.belongsTo(domain.User, {
        foreignKey: 'userId',
    });

    domain.Account.hasMany(domain.Transaction, {
        foreignKey: 'toAccountId',
    });

    domain.Account.hasMany(domain.Transaction, {
        foreignKey: 'fromAccountId',
    });

    // -----------Transaction-----------------
    domain.Transaction.belongsTo(domain.Account, {
        foreignKey: 'toAccountId',
    });

    domain.Transaction.belongsTo(domain.Account, {
        foreignKey: 'fromAccountId',
    });

};
