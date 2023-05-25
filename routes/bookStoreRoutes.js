const express = require('express');
const bookController = require('../controllers/bookStore');
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

// router.get('/', isAuthenticatedUser, bookController.getAllBooks);
router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);
router.get('/:id', bookController.getBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

module.exports = router;


// const express = require("express");
// const router = express.Router();

// const {post} = require("../controlers/createBlog");

// router.post("/createBlog",post);

// module.exports = router;