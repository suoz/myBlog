// var User = require('../models/user.js');

module.exports = function (app, express) {

	var router = express.Router();
    router.param(['author', 'noteid'], function(req, res, next, value) {
		next();
	});

    app.get('/', function(req, res) {
    	res.redirect('/login')
	});
	
	app.use('/login', require('./login'))
};
