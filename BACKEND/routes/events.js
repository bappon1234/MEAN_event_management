const express = require("express");
const router = express.Router();
const {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    addFeedback
} = require('../controllers/eventController');

router.post('/', createEvent);
router.get('/', getEvents);
router.get('/:id', getEventById);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);
router.post('/:id/feedback', addFeedback);

module.exports = router;