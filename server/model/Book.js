module.exports = {

    getAllBooksbysection: (connection, userId, callback) => {
        stmt = 'SELECT b.*, s.section_name , g.name as genreName ' +
            'from BOOK b ' +
            'INNER JOIN keeper k On k.book = b.id_book ' +
            'INNER JOIN section s On s.id_section = k.section ' +
            'INNER JOIN genre g On g.id_genre = b.genre ' +
            'WHERE k.user = ? And b.genre = g.id_genre ORDER BY s.section_name';
        connection.query(stmt, [userId], callback)

    },
    //get all of the books on a section for the user(bibliothèque screen)
    getBooksbySection: (connection, section, userId, callback) => {
        stmt = 'select distinct b.thumbnail, b.subtitle, b.author, b.Isbn,b.published_date, b.nb_pages ' +
            'from book b ' +
            'inner join keeper k On k.book = b.id_book  ' +
            'INNER JOIN section s On s.id_section = k.section ' +
            'where s.section_name = ? and k.user = ? ';
        connection.query(stmt, [section, userId], callback)

    },

    // get all books order by- authors(Library screen, call before the user go on the screen)
    getAllBooksbyauthor: (connection, userId, callback) => {

        stmt = 'SELECT distinct b.*  from BOOK b ' +
            'inner join keeper k On k.book = b.id_book  ' +
            '  where k.user = ? ORDER BY b.author ';
        connection.query(stmt, [userId], callback)

    },

    //get a book by authors  ( Library screen, call when the user touch a more book from one author)
    getBooksbyauthor: (connection, author, userId, callback) => {
        stmt = 'select distinct b.thumbnail, b.subtitle, b.author, b.Isbn,b.published_date, b.nb_pages ' +
            'from BOOK b ' +
            'inner join keeper k On k.book = b.id_book  ' +
            'where b.author = ? and k.user = ? ';
        connection.query(stmt, [author, userId], callback)

    },
    //get a book by his isbn ( Library screen, call when the user touch a thumbnail)
    getBookbyIsbn: (connection, isbn, userId, callback) => {
        stmt = 'select distinct b.* from book b  ' +
            'inner join keeper k On k.book = b.id_book  ' +
            'where b.isbn = ? and k.user = ? ';
        connection.query(stmt, [isbn, userId], callback)

    },
    //get categories of all books for the user(bibliothèque screen)


    // get books by categories(List screen)
    getAllBooksbyCategories: (connection, userId, callback) => {

        stmt = 'SELECT DISTINCT c.name , b.author as auteur, b.thumbnail, b.Isbn ' +
            'FROM genre c , book b ' +
            'inner join keeper k On k.book = b.id_book ' +
            'WHERE b.genre = c.id_genre and k.user = ? ' +
            'ORDER BY c.name, b.subtitle';
        connection.query(stmt, [userId], callback)

    },


    //update section when a book is add
    /**
     * update keeper set section =
     */



    //get the sections of one book (from the api or database)(book screen)
    getSectionsofBook: (connection, isbn, userId, callback) => {
        stmt = 'SELECT s.section_name from section s ' +
            'inner join keeper k on s.id_section = k.section ' +
            'inner join book b on b.id_book = k.book ' +
            'where b.isbn = ? and k.user = ?';
        connection.query(stmt, [isbn, userId], callback)

    },

    //add one book

    newBook: (connection, book, callback) => {
        stmt = 'INSERT INTO book VALUES(null,?,?,?,?,?,?,?,?,?,?)'
        connection.query(stmt,
            [
                book[0], book[1], book[2],
                book[3], book[4], book[5],
                book[6], book[7], book[8],
                book[9]
            ],
            callback)
    },

    newKeeper: (connection, user, bookId, sectionId, callback) => {

        stmt = 'Insert into keeper values(?,?,?,?)';
        connection.query(stmt, [user, bookId, sectionId, new Date().getDate()], callback)

    },
    newCategory: (connection, name, callback) => {

        stmt = 'Insert into genre values(null,?)';
        connection.query(stmt, [name], callback)
    }
}

