let self = {}

const postService = require('../services/postServices')


self.vista = function (req, res) {
	 res.render('agregar');
};

//self.postear = function (req, res){
//  res.render('index',
//  	{
//  		posteo: postsService.getImages(),
//  	});
//};





module.exports = self