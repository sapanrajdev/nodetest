const { firstService } = require('../../services');

const getFirstObj = async () => {
    return firstService.getFirstObj();
};

module.exports = {
    getFirstObj,
};
