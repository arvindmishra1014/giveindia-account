process.env.NODE_ENV = process.env.NODE_ENV || "development";
require("../configurations/dependency-include");

const createDummyUsers = async () => {
    try {
        const data = [
            {
                name: "arvind",
                phone: "1235689741",
                email: "arvind@gmail.com",
                password: "123456",
                account: {
                    balance: "500000",
                    accountId: 22346787,
                    accountType: "savings"
                }
            },
            {
                name: "vipin",
                phone: "1235689742",
                email: "vipin@gmail.com",
                password: "123456",
                account: {
                    balance: "200000",
                    accountId: 22346789,
                    accountType: "savings"
                }
            },
            {
                name: "vaibhav",
                phone: "1235689745",
                email: "vaibhav@gmail.com",
                password: "123456",
                account: {
                    balance: "10000",
                    accountId: 22346797,
                    accountType: "basic_savings"
                }
            },
            {
                name: "pulkit",
                phone: "1235689723",
                email: "pulkit@gmail.com",
                password: "123456",
                account: {
                    balance: "9000000",
                    accountId: 22346985,
                    accountType: "savings"
                }
            },
            {
                name: "shubham",
                phone: "1235999741",
                email: "sharma@gmail.com",
                password: "123456",
                account: {
                    balance: "97800000",
                    accountId: 22346784,
                    accountType: "current"
                }
            },
            {
                name: "Shivi",
                phone: "1235999742",
                email: "sharma@gmail.com",
                password: "123456",
                account: {
                    balance: "97800000",
                    accountId: 32346784,
                    accountType: "current"
                }
            },
            {
                name: "Pihu",
                phone: "1235999742",
                email: "sharma@gmail.com",
                password: "123456",
                account: {
                    balance: "97800000",
                    accountId: 52346784,
                    accountType: "current"
                }
            },
        ];

        const user = await domain.User.findOne({
            where: {
                role: 'user'
            }
        });

        if (!user) {
            for (const item of data) {
                const user = await domain.User.create(item);

                await domain.Account.create({ ...item.account, userId: user.id });
            }
        }
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = (async function () {
    try {
        await createDummyUsers();

        process.exit();

    } catch (err) {
        console.log(err);
    }
})();
