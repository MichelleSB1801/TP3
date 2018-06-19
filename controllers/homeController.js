let self = {}

const postService = require('../services/postServices')


self.vista = function (req, res) {
	 res.render('index');
};



module.exports = self