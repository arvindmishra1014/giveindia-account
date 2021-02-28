
const transactionSchema = SequelizeConnect.define('Transaction', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fromAccountId: {
        type: Sequelize.INTEGER,
        field: "from_account_id",
        allowNull: false
    },
    toAccountId: {
        type: Sequelize.INTEGER,
        field: "to_account_id",
        allowNull: false
    },
    amount: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}, {
    tableName: 'transaction',
});


module.exports = transactionSchema;
