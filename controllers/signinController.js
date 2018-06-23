let self = {}
const usersService = require('../services/usersServices')
const postsService = require('../services/postServices')



self.verif = function(req, res){
	console.log(req.body)
	if (req.body.username && req.body.pass) {
		usersService.verif(req.body)
		if (usersService.userVerif == true) {
			res.sendStatus(302)
		}
	}else{
		return res.sendStatus(400)
	}
	
}

self.logout = function(req, res){
		usersService.logout(req.body) 
		return res.sendStatus(302)
}

self.vista = function (req, res) {
	if (usersService.userVerif == true) {
		res.render('signin', {
  			prod: postsService.getProducts(),
  		});
	}else{
		return res.redirect('http://localhost:3000/')
  }
};


/*self.user = function (req, res){
  res.render('signin',
  	{
  		user: postsService.getImages(),
  	});
};
//////////////////

self.verif = function(req, res){
	console.log(req.body)
	if (req.body.username && req.body.pass) {
		console.log('signincontroller 1')
		if (usersService.userVerif == true) {
			console.log('signincontroller 2')
			res.sendStatus(302)
		}else{
			console.log('signincontroller 3')
			res.sendStatus(400)
		}
	}
}




//////////////////


self.newUser = function(req, res){
	console.log(req.body);
	let newUser = postsService.newUser(req.body);
	res.json({nUser: nuevousuario});
}

*/
module.exports = self