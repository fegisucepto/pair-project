const { Post,Profile,User } = require("../models")
const sequelize = require('sequelize')
const {Sequelize} = require('sequelize');

class Controller{
    static home(req, res) {
        res.render('homepage')
    }
    static loginForm(req, res) {
        const errorFound = req.query.error
        res.render('login', { errorFound })
    }
    static signUp(req, res) {
        const foundErrors = req.query.error
        let errors = foundErrors ? foundErrors.split(';') : undefined
        res.render('register', { errors })
    }
    static register(req, res) {
        res.redirect('login')
    }

    static postLogin(req, res) {
        res.redirect('home')
    }

    // static homepage(req,res){
    //     res.render('home')
    // }
    static homepage (req, res) {
    
            res.render('home')
        }

    static AddNewArt (req, res) {
        res.render('addnews')
    }

    static AddNewArtDb (req, res) {
        const input = req.body
        const { name, artist, date, photo, placeOfOrigin, description } = input
        const event = new Date (date)
        const formatDate = event.toISOString()

        Art.create ({
            name,
            artist,
            date: formatDate,
            photo,
            placeOfOrigin,
            description
        })

        .then(() => {
                res.redirect('/')
            })

            .catch(err => {
                res.send(err)

            })
    }

    static detailArtId (req, res) {
        const id = req.params.id;
       
        Art.findAll ({
            where: {
            id: +id
        }})

        .then(data => {
            res.render ('detailpost',{ data })

        }).catch(err => {
            res.send(err)
        })
    }
        
    

    static UpdatebyId (req, res) {
        const id = req.params.id
        const {name, artist, date, photo, placeOfOrigin, description} = req.body
       
        Art.update ({
            name, 
            artist, 
            description,
            date, 
            photo, 
            placeOfOrigin
        }, {
            where: {
                id:+id
            }
        })

        .then(() => {
            res.redirect ('/')
        })

        .catch(err => {
            res.send(err)
        });
    }

    static deletebyId (req, res) {
        const id = req.params.id
       
        Art.destroy({
            where: {
                id:id
            }
        })

        .then(() => {
            res.redirect('/')
        })

        .catch(err => {
            res.send (err)
        })
    }
}

module.exports = Controller