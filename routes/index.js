const express = require('express');
const router = express.Router();
const Controller = require('../controllers');



router.get('/', Controller.home);

router.get('/login', Controller.loginForm)

router.post('/login', Controller.postLogin)

router.get('/register', Controller.signUp)

router.post('/register', Controller.register)

router.get('/home', Controller.homepage);

router.get('/arts/add', Controller.AddNewArt);

router.post('/arts/add', Controller.AddNewArtDb);

// router.get('/:ProfileId', Controller.showProfile);

router.get('/arts/:id', Controller.detailArtId);

router.post('/arts/:id/edit', Controller.UpdatebyId);

router.get('/arts/:id/delete', Controller.deletebyId);



module.exports = router