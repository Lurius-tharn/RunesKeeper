module.exports = {
    

    // connect the user
    getUser:(connection,pseudo,callback)=>{
        stmt = 'SELECT * FROM user WHERE pseudonyme = ?'
        connection.query(stmt,[pseudo],callback)
    },
    //register the user
    newUser:(connection,pseudo,email,password,callback) => {
        stmt = 'INSERT INTO user VALUES(null,?,?,?)'
        connection.query(stmt,
            [
                pseudo.trim(),
                email.trim(),
                password.trim(),
        ],
            callback)

    },
    //get the count of books on his library
    /**
     * select count( DISTINCT isbn) from book b inner join keeper k on k.book = b.id_book where k.user = 1 and not k.section = 5
     */
  
    //update password
}