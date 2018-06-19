let self = {}



let users ={
		user: 'juani23',
		password: 'juani23',
};


self.verif = function(data){
	if (data.username == users.user && data.pass == users.password) {
		return true;
	}else{
		return false;
	}
}


/*self.newUser = function(data) {
  const nuevousuario = {
    user: data.user,
    passwords: data.pass,
    }
  users.push(nuevousuario)
}*/

module.exports = self