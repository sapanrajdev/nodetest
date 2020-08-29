const { firstDao } = require('../../dao');

const getFirstObj = async (id) => {
    console.log('service getFirstObj');
    const firstObj = await firstDao.getFirstObj(id);
    return firstObj;
};

const addFirstObj = async (body) => {
    console.log('service addFirstObj');
    return firstDao.addFirstObj(body);
};

module.exports = {
    getFirstObj,
    addFirstObj,
};
