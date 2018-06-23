let self = {}

const postService = require('../services/postServices')
const usersService = require('../services/usersServices')
let userVerif = false;


self.vista = function (req, res) {
	res.render('index');
};




module.exports = self