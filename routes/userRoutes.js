const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.post("/", user.registerUser);
router.post("/login", user.loginUser);
// router.get("/logout", user.logo);

module.exports = router;

