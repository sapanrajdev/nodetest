var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const setConnection = (req, res, next) => {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        process.client = db;
        console.log("Database created!");
        return next();
    });
};

module.exports = {
    setConnection
};