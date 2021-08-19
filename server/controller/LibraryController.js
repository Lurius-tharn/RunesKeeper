const bookData = require('../model/book');

module.exports = {


    AllBooksbysection:(req,res) =>{
        const {userId} = req.params;
        bookData.getAllBooksbysection(req.con,userId, 
            (err,bookRows) =>{
                res.send(bookRows);
        });          
    }, 
    booksbySection:(req,res) =>{
        const {section,userId} = req.params;
        console.log(section,userId)
        bookData.getBooksbySection(req.con,section,userId, (err,rows) =>{
            console.log(rows);
            res.send(rows);
        })    
    },

    Allbooksbyauthor:(req,res) =>{
        const {userId} = req.params;
        bookData.getAllBooksbyauthor(req.con,userId, 
            (err,bookRows) =>{
                res.send(bookRows);
        });          
    }, 
    Booksbyauthor:(req,res) =>{
        const {userId, author} = req.params;
        bookData.getBooksbyauthor(req.con,author,userId, 
            (err,bookRows) =>{
                res.send(bookRows);
        });          
    }, 
    AllBooksbyCategories:(req,res) =>{
        const {userId} = req.params;
        bookData.getAllBooksbyCategories(req.con,userId, 
            (err,bookRows) =>{
                res.send(bookRows);
        });          
    },
    BookbyIsbn:(req,res) =>{
        const {userId, isbn} = req.params;
        bookData.getBookbyIsbn(req.con,isbn,userId, 
            (err,bookRows) =>{
                res.send(bookRows);
        });          
    },
    SectionsofBook:(req,res) =>{
        const {userId, isbn} = req.params;
        bookData.getSectionsofBook(req.con,isbn,userId, 
            (err,bookRows) =>{
                res.send(bookRows);
        });          
    },

}