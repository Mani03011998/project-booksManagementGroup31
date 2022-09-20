const express = require('express');
const router = express.Router();

// ---------------------------|| CONTROLLERS ||--------------------------------

const bookController= require("../controllers/bookController.js")        // BOOK CONTROLLER
 const reviewController=require("../controllers/reviewController.js")    // REVIEW CONTROLLER
 const userController=require("../controllers/userController.js")        // USER CONTROLLER

// ---------------------------|| USER ||--------------------------------

 router.post("/register",userController.createUser)
 router.post("/login",userController.loginUser)

// ---------------------------|| BOOK ||--------------------------------

router.post("/books",bookController.createBooks)
router.get("/books",bookController.getBooks)
router.get("/books/:bookId",bookController.getBookByparam )
router.put("/books/:bookId",bookController.updateBook)
router.delete("/books/:bookId",bookController.deleteBook)

// ---------------------------|| REVIEW ||--------------------------------

router.post("/books/:bookId/review",reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)

// -----------------------------------------------------------------------

module.exports = router;