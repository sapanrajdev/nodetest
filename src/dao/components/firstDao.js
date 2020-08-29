var { ObjectId } = require('mongodb');

const getFirstObj = async (id) => {
    const dbo = process.client.db('mydb');
    const response = await dbo.collection("itus").findOne({ _id: ObjectId(id) });
    return response;
};

const addFirstObj = async (body) => {
    const dbo = process.client.db('mydb');
    const response = await dbo.collection("itus").insertOne(body);
    return response.ops[0];
};

module.exports = {
    getFirstObj,
    addFirstObj,
};
