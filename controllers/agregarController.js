let self = {}


const postService = require('../services/postServices')
const usersService = require('../services/usersServices')


self.vista = function (req, res) {
	if (usersService.userVerif == true) {
		res.render('agregar');
	}else{
		return res.redirect('http://localhost:3000/');
	}
};

/*self.postear = function (req, res){
  res.render('signin',
  	{
  		prod: postsService.getProducts(),
  	});
};*/

self.newpost = function(req, res){
	let nuevopost = postService.upload(req.body);
	res.json({npost: nuevopost});
} 




module.exports = self