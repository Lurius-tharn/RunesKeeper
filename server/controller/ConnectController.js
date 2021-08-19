const userData = require("../model/user.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    signin: (req,res) =>{
        const{pseudo,password} = req.body;

        if (typeof pseudo !== 'undefined' || typeof password !== 'undefined') {

            userData.getUser(req.con,pseudo, (err,rows) => {
                if (rows.length == 0) {
                    res.json({
                        "valid" : false,
                        "message" : "pseudonyme incorrect!"
                    })

                }else{
                    bcrypt.compare(password, rows[0].password, (err,result) =>{
                        if (result == true) {
                            res.json({
                                "valid" : true,
                                "message" : "Succès !",
                                "pseudo" : pseudo,
                                "userId" :rows[0].id_user
                            })
                            //Access to the home page
                        } else {
                            res.json({
                                "valid" : false,
                                "message" : "mot de passe saisie incorrect !"
                            })
                        }
                    })
                }
            })
            
        }
    },
    signup: (req,res) => {
        
        const {pseudo,email,password, repeatPassword} = req.body;

        if (pseudo == "") {
            req.json({
                "valid" : false,
                "message" : "Inscrivez votre pseudonyme !"
            })
        }else if(email == "") {
            req.json({
                "valid" : false,
                "message" : "Inscrivez votre email !"
            })
        }else if(password == "") {
            req.json({
                "valid" : false,
                "message" : "Inscrivez votre mot de passe !"
            })
        }else if(repeatPassword == "" && repeatPassword !== password) {
            req.json({
                "valid" : false,
                "message" : "vérification incomplète"
            })
        }else{
            bcrypt.hash(password, saltRounds, (err, hash) => {
                if (err) 
                console.log(err);
            
                userData.newUser(req.con,pseudo,email,hash,(err,rows) => {
                    if(err)
                        throw err;
                    res.json({
                        "valid" : true,
                        "message" : "Succès !"
                    })    
    
                })
            })
        }

    }
}