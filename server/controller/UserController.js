const bookData = require("../model/book")

module.exports = {
    newKeeper: (req, res) => {
        const {idUser, idBook, idSection} = req.body;
        console.log(idUser, idBook, idSection)

        bookData.newKeeper(req.con, idUser, idBook, idSection, (err, rows) => {
            if (err) {
                return res.status(400).json({
                    status: 'error',
                    error: 'Livre déja ajouté dans cette section',
                    message: 'Livre déja ajouté dans cette section'
                });
            }
            res.json({
                "valid": true,
                "message": "Livre ajouté dans la section !",
            })
        })
    }
}