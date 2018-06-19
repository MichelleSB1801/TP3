let self = {}
const usersService = require('../services/usersServices')
let userVerif = false;


self.vista = function (req, res) {
	 res.render('signin');
};




self.verif = function(req, res){
	console.log(req.body)
	if (req.body.username && req.body.pass) {
		userVerif = usersService.verif(req.body)
		console
		if (userVerif == true) {
			res.sendStatus(302)
		}
	}else{
		return res.sendStatus(400)
	}
	
}

/*self.user = function (req, res){
  res.render('signin',
  	{
  		user: postsService.getImages(),
  	});
};



self.newUser = function(req, res){
	console.log(req.body);
	let newUser = postsService.newUser(req.body);
	res.json({nUser: nuevousuario});
}

*/
module.exports = self