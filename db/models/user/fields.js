module.exports = {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.TEXT,
        trim: true,
    },
    role: {
        type: Sequelize.ENUM("admin", "super_admin", "user"),
        defaultValue: "user"
    },
    phone: {
        type: Sequelize.TEXT,
    },
    email: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    password: {
        type: Sequelize.TEXT,
        trim: true,
    },
    salt: {
        type: Sequelize.TEXT,
        trim: true,
    },
    isAccountLocked: {
        type: Sequelize.BOOLEAN,
        field: 'is_account_locked',
        defaultValue: false,
    },
    isEmailVerified: {
        type: Sequelize.BOOLEAN,
        field: 'is_email_verified',
        defaultValue: false,
    },
    isPhoneVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_phone_verified"
    },
    isLoggedIn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        field: "is_logged_in"
    },
}