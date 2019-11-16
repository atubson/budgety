const express = require('express');
const mongodb = require('mongodb');
const dbUser = 'atub';
const dbPassword = encodeURIComponent('Fdy24iyp@');

const router = express.Router();

// GET Budget
router.get('/', async (req, res) => {
    const budget = await loadBudgetCollection();
    res.send(await budget.find({}).toArray());
});

// Create Budget
router.post('/', async (req, res) => {
    const budget = await loadBudgetCollection();
    await budget.insertOne({
        text: req.body.text,
        createdAt: new Date()
    });
    res.status(201).send();
})

// Delete budet
router.delete('/:id', async (req, res) => {
    const budget = await loadBudgetCollection();
    await budget.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
});
async function loadBudgetCollection() {
    const client = await mongodb.MongoClient.connect
    (`mongodb://${dbUser}:${dbPassword}@ds055397.mlab.com:55397/budgety-db`, {
        useUnifiedTopology: true
    });

    return client.db('budgety-db').collection('budget');
}


module.exports = router;