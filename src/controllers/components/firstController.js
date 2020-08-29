const { firstService } = require('../../services');

const getFirstObj = async (reqParams) => {
    console.log('controller getFirstObj');
    const data = await firstService.getFirstObj(reqParams.id);
    return data;
};

const addFirstObj = async (body) => {
    console.log('controller addFirstObj');
    return firstService.addFirstObj(body);
}

module.exports = {
    getFirstObj,
    addFirstObj,
};
