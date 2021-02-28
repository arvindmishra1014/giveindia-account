const fields = require("./fields");

const accountSchema = SequelizeConnect.define('Account', fields, {
    tableName: 'account',
});

module.exports = accountSchema;
