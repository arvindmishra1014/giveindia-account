module.exports = {
    accountId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "account_number",
        primaryKey: true,
    },
    balance: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    accountType: {
        type: Sequelize.ENUM("savings", "current", "basic_savings"),
        defaultValue: "basic_savings",
        field: "account_type"
    },
    userId: {
        type: Sequelize.INTEGER,
        field: "user_id",
        allowNull: false
    }
}