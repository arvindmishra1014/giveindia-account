module.exports = async function ({ email, phone }) {
    try {
        const user = await domain.User.findOne({
            where: {
                $or: [{
                    email
                }, {
                    phone
                }]
            }
        });

        return user;
    } catch (err) {
        return Promise.reject(err);
    }
};
