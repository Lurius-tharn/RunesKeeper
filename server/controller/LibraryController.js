const bookData = require('../model/Book');

module.exports = {


    AllBooksbysection: (req, res) => {
        const {userId} = req.params;
        bookData.getAllBooksbysection(req.con, userId,
            (err, bookRows) => {
                const result = bookRows.reduce(function (sections, item) {
                    let section = sections.find(section => section.sectionName === item.section_name);
                    if (!section) {
                        section = {sectionName: item.section_name, data: []};
                        sections.push(section);
                    }
                    section.data.push(item);
                    return sections;

                }, []);


                res.send(result);
            });
    },
    booksbySection: (req, res) => {
        const {section, userId} = req.params;
        console.log(section, userId)
        bookData.getBooksbySection(req.con, section, userId, (err, rows) => {
            console.log(rows);
            res.send(rows);
        })
    },

    Allbooksbyauthor: (req, res) => {
        const {userId} = req.params;
        bookData.getAllBooksbyauthor(req.con, userId,
            (err, bookRows) => {
                const result = bookRows.reduce(function (authors, item) {
                    let author = authors.find(author => author.Auteur === item.author);
                    if (!author) {
                        author = {Auteur: item.author, data: []};
                        authors.push(author);
                    }
                    author.data.push(item);
                    return authors;

                }, []);

                res.send(result);
            });
    },
    Booksbyauthor: (req, res) => {
        const {userId, author} = req.params;
        bookData.getBooksbyauthor(req.con, author, userId,
            (err, bookRows) => {
                res.send(bookRows);
            });
    },
    AllBooksbyCategories: (req, res) => {
        const {userId} = req.params;
        bookData.getAllBooksbyCategories(req.con, userId,
            (err, bookRows) => {

                res.send(bookRows);
            });
    },
    BookbyIsbn: (req, res) => {
        const {userId, isbn} = req.params;
        bookData.getBookbyIsbn(req.con, isbn, userId,
            (err, bookRows) => {
                res.send(bookRows);
            });
    },
    SectionsofBook: (req, res) => {
        const {userId, isbn} = req.params;
        bookData.getSectionsofBook(req.con, isbn, userId,
            (err, bookRows) => {
                res.send(bookRows);
            });
    },

}