const { Router } = require('express');

const LogEntry = require('../models/logEntry');

const router = Router();

router.get('/', async (req, res, next) => {
    try {
        const entries = await LogEntry.find();
        res.json(entries);
    } catch (error) {
        next(error);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const log_Entry = new LogEntry(req.body);
        const createdEntry = await log_Entry.save();
        res.json(createdEntry);
    } catch (error) {
        if(error.name === 'ValidationError')
        {
            res.status(422);
        }       
    }
});


module.exports = router;