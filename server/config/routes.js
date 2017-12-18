var UserController = require('../controllers/UserController'); //rename controller
var mongoose = require('mongoose');
var path = require("path");

module.exports = function (app) {
    
    app.get('/API/getUser', function (req, res) {
    UserController.getAll(req, res); })

    app.get('/API/getTeam', function (req, res) {
        UserController.getAll(req, res);
    })

    app.get('/API/getMessage', function (req, res) {
        UserController.getAll(req, res);
    })

    app.get('/API/getChannel', function (req, res) {
        UserController.getAll(req, res);
    })
    
    app.post('/API/createUser', function (req, res) {
        console.log('=--===--- this route ==--=---- Create Note ==----')
        console.log('req.body', req.body)
        UserController.createUser(req, res);
    })

    app.post('/API/createTeam', function (req, res) {
        console.log('=--===--- this route ==--=---- Create Note ==----')
        console.log('req.body', req.body)
        UserController.createTeam(req, res);
    })
    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });

};    

