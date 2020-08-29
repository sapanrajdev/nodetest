const router = require('express').Router();

const {
    secondController,
} = require('../../controllers');

router.get(
    '/first',
    async (req, res) => {
        const data = await secondController.getFirstObj();
        return res.send(data);
    }
);

module.exports = router;
