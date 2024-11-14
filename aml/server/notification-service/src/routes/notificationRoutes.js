const wishlistNotificationController = require('../controllers/wishlistNotificationController');
const returnNotificationController = require('../controllers/returnNotificationController');

const express = require('express');
const router = express.Router();

// Routes for notifications
router.post('/send-wishlist', wishlistNotificationController.sendWishlistNotificationEndpoint); // Make sure this function name matches what's exported
router.post('/send-return', returnNotificationController.sendReturnNotification); // Matches exported function

module.exports = router;
