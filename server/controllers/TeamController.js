var mongoose = require('mongoose');
var Team = mongoose.model('Team');
module.exports = (function () {


    return {
        index: function (req, res) {
            Tema.find({}, function (err, Team) {
                res.render('index', {
                    team: Team
                });
            });
        },


        createTeam: function (req, res) {
            console.log('HEY, YOURE CREATING....')
            var teams = new Team();
            teams.teamName = req.body.teamName;
            teams._captain = req.body._captain;
            teams._user = req.body._user;
            teams.save(function (error, team) {
                console.log('THIS TEAM IS', teams)
                if (error) {
                    console.log('===-- ERRRORRR --====')
                    console.log(err)
                    return res.json({ 'error': error });
                }
                else {
                    console.log('MAMA, I MADE IT!')
                    console.log('THIS TEAM IS', team)
                    return res.json({ 'newTeam': team })
                }

            });

        },

        getAll: function (req, res) {
            console.log('SOMETHING IS HERE')
            Team.find({}, function (error, response) {
                console.log('ERRORS,', error);
                if (error || response == null) {
                    console.log('ERRRORRRR')
                    return res.json({ 'error': error, 'response': response })
                } else {
                    console.log('YASS')
                    // return res.json({ 'response': response })
                    return res.json(response);
                }
            })
        }

    };
})();