# payment app

# Getting started

## Installation


Clone the repository

    https://github.com/arvindmishra1014/giveindia-account.git

Switch to the repo folder

    cd giveindia-account

Install all the packages using npm

    npm install

Create DB (In postgres) and change the DB details in development.env OR production.env

Start the server

    npm run dev OR npm start

Create data in DB (Seeding the testing data. Pls use new command line)

    cd script
    node init-app.js

## Testing the API

API

API URL: http://localhost:4000/api/v1/transfer-money
Method: post
Payload: {
	"fromAccountId": "22346787",
	"toAccountId": "22346789",
	"amount": "1000"
}


