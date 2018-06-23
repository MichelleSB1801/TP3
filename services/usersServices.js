let self = {}



let users ={
		user: 'juani23',
		password: 'juani23',
};

self.userVerif = false;

self.verif = function(data){
	console.log('userService 1')
	console.log(data.username, data.pass)
	if (data.username == users.user && data.pass == users.password) {
		console.log('userService 2')
		self.userVerif = true;
	}else{
		console.log('userService 3')
		self.userVerif = false;
	}
};


self.logout = function(body){
	console.log('userlogout', body.id, self.userVerif)
	self.userVerif = body.id;
	console.log('userlogout', self.userVerif, '2')
}

/*self.newUser = function(data) {
  const nuevousuario = {
    user: data.user,
    passwords: data.pass,
    }
  users.push(nuevousuario)
}*/

module.exports = self