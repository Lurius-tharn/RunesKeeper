const express = require('express');
const router = express.Router();

const libraryController = require('../controller/LibraryController');
const connectController = require('../controller/connectController');

//connectController Declaration
router.post("/signin",connectController.signin);
router.post("/signup",connectController.signup);

router.get("/allBooksbysection/:userId",libraryController.AllBooksbysection);
router.get("/booksbySection/:section/:userId",libraryController.booksbySection);
router.get("/allBooksbyAuthor/:userId",libraryController.Allbooksbyauthor);
router.get("/booksbyauthor/:userId/:author",libraryController.Booksbyauthor);
router.get("/allBooksbyCategories/:userId",libraryController.AllBooksbyCategories);
router.get("/bookbyIsbn/:userId/:isbn",libraryController.BookbyIsbn);
router.get("/sectionsofBook/:userId/:isbn",libraryController.SectionsofBook);


module.exports = router