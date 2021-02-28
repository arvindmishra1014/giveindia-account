const domain = require("../db/models");

exports.transferMoneyController = async (req, res, next) => {
    try {
        const { fromAccountId, toAccountId, amount } = req.body;

        const toAccount = await domain.Account.findOne({
            where: {
                accountId: toAccountId
            }
        });

        if (!toAccount) {
            const error = new Error("Transferrer account not found!");
            error.statusCode = 404;
            return next(error);
        }

        const fromAccount = await domain.Account.findOne({
            where: {
                accountId: fromAccountId
            }
        });

        if (!fromAccount) {
            const error = new Error("Transferee account not found!");
            error.statusCode = 404;
            return next(error);
        }

        if (parseInt(fromAccount.balance) < parseInt(amount)) {
            const error = new Error("Insufficient Balance!");
            error.statusCode = 400;
            return next(error);
        }

        if (toAccount.accountType === 'basic_savings') {
            const totalBalance = parseInt(toAccount.balance) + parseInt(amount);

            if (totalBalance > +process.env.BASIC_ACCOUNT_LIMIT) {
                const error = new Error("Basic saving account can not exceed ₹ 50000.");
                error.statusCode = 400;
                return next(error);
            }
        }

        const transaction = await domain.Transaction.create({
            toAccountId,
            fromAccountId,
            amount: amount
        });

        const fromBalance = parseInt(fromAccount.balance) - parseInt(amount);
        const toBalance = parseInt(toAccount.balance) + parseInt(amount);

        await fromAccount.update({
            balance: fromBalance
        });

        await toAccount.update({
            balance: toBalance
        });

        let toAccountBalance = await domain.Account.findAll({
            where: {
                userId: toAccount.userId
            },
            attributes: ["balance"]
        });

        let fromAccountBalance = await domain.Account.findAll({
            where: {
                accountId: fromAccountId
            },
            attributes: ["balance"]
        });

        toAccountBalance = toAccountBalance.map(a => a.balance);
        fromAccountBalance = fromAccountBalance.map(a => a.balance);

        const totalDestBalance = toAccountBalance?.length ? toAccountBalance.reduce((a, b) => parseInt(a) + parseInt(b)) : 0;
        const totalSrcBalance = fromBalance;

        const response = views.JsonView({
            newSrcBalance: totalSrcBalance,
            totalDestBalance,
            transferedAt: transaction.createdAt
        });

        return res.status(201).json(response);

    } catch (err) {
        next(err);
    }
};
