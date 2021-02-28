const { v1 } = require("uuid");

module.exports = function (instance) {
    const salt = v1();
    const hashedPassword = configHolder.encryptUtility.createHash(salt, instance.password);

    instance.password = hashedPassword;
    instance.salt = salt;

    return Promise.resolve(instance);
};
