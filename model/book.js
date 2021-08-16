module.exports = {

    //get all of the books on a section for the user(bibliothèque screen)
   /**
    * select b.*  from BOOK b 
    * inner join keeper k On k.book = b.id_book 
    * inner join section s On s.id_section = k.section 
    * where s.section_name = ? and k.user = ?
    * get by section name and user id
    */
   getBooksbySection:(connection, section,userId, callback,q) =>{
    stmt = 'select b.*  from BOOK b '+
        'inner join keeper k On k.book = b.id_book '+
        'inner join section s On s.id_section = k.section ' +
        'where s.section_name = ? and k.user = ?'+ q;
    connection.query(stmt,[section,userId],callback)
    
    },
    //get books by author in a library for the user(bibliothèque screen)
    /**
    * select b.* from BOOK b 
    * inner join keeper k On k.book = b.id_book 
    * where b.author = "Anne Robillard" and k.user = 1
    */

    getBooksbyauthor:(connection, author,userId, callback,q) =>{
    stmt = 'select b.* from BOOK b  '+
        'inner join keeper k On k.book = b.id_book  '+
        'inner join section s On s.id_section = k.section ' +
        'where b.author = "Anne Robillard" and k.user = ? '+ q;
    connection.query(stmt,[author,userId],callback)

    },
    //get categories of all books for the user(bibliothèque screen)
    /**
    * select c.* from genre c , book b
    *  inner join keeper k On k.book = b.id_book 
    * where b.genre = c.id_genre and k.user = 1
    */
    getCategories:(connection, userId, callback) =>{
    stmt = 'select DISTINCT c.* from genre c , book b '+
        'inner join keeper k On k.book = b.id_book  '+
        'where b.genre = c.id_genre and k.user = ? ';
    connection.query(stmt,[userId],callback)

    },
    // get books by categories(List screen)
    /**
    * select DISTINCT b.* from book b 
    * inner join keeper k On k.book = b.id_book 
    * where b.genre = ? and k.user = ?
    */

    getBooksbyCategories:(connection, categorieId,userId, callback,q) =>{
    stmt = 'select DISTINCT b.* from book b  '+
        'inner join keeper k On k.book = b.id_book '+
        'where b.genre = ? and k.user = ? ' + q;
    connection.query(stmt,[categorieId,userId],callback)

    },


    //update section when a book is add
    /**
    * update keeper set section = 
    */



    //get the sections of one book (from the api or database)(book screen)
    /**
    * SELECT s.section_name from section s inner join keeper k on s.id_section = k.section inner join book b on b.id_book = k.book  where b.isbn = "bfrbrrb"
    */
    getSectionsofBook:(connection, isbn ,userId, callback)=>{
    stmt = 'SELECT s.section_name from section s '+
            'inner join keeper k on s.id_section = k.section '+
            'inner join book b on b.id_book = k.book '+ 
            'where b.isbn = ? and k.user = ?';
    connection.query(stmt,[isbn,userId],callback)

    },

    //add one book
    /**
    * insert into Book values(??????)
    */
    newBook: (connection,book, callback) =>{
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

    newKeeper:(connection,user,bookId,sectionId, callback) =>{

    stmt ='Insert into keeper values(?,?,?,?)';
    connection.query(stmt,[user,bookId,sectionId, new Date().getDate() ],callback)

    },
    newCategory:(connection,name, callback)=>{

        stmt ='Insert into genre values(null,?)';
        connection.query(stmt,[name],callback)
    }
}

