const router = require('express').Router();

const {
    firstController,
} = require('../../controllers');

router.get(
    '/:id',
    async (req, res) => {
        const data = await firstController.getFirstObj(req.params);
        return res.send(data);
    }
);

router.post('/', async (req, res) => {
    const data = await firstController.addFirstObj(req.body);
    console.log(data, ' IN ROUTE');
    return res.send(data);
});

module.exports = router;
