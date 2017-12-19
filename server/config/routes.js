var UserController = require('../controllers/UserController'); 
var TeamController = require('../controllers/TeamController');
var MessageController = require('../controllers/MessageController');
var ChannelController = require('../controllers/ChannelController');
var mongoose = require('mongoose');
var path = require("path");

module.exports = function (app) {
    
    app.get('/API/getUser', function (req, res) {
    UserController.getAll(req, res); })

    app.get('/API/getTeam', function (req, res) {
        TeamController.getAll(req, res);
    })

    app.get('/API/getMessage', function (req, res) {
        MessageController.getAll(req, res);
    })

    app.get('/API/getChannel', function (req, res) {
        ChannelController.find(req, res);
    })
    
    app.post('/API/createUser', function (req, res) {
        UserController.createUser(req, res);
    })

    app.post('/API/createTeam', function (req, res) {
        TeamController.createTeam(req, res);
    })
    app.post('/API/createChannel', function (req, res) {
        ChannelController.createChannel(req, res);
    })
    app.all("*", (request, response) => { response.sendFile(path.resolve("./angular-app/dist/index.html")) });

};    

