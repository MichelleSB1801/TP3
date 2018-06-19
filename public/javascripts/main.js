$.ajax({
		url: "http://localhost:3000/",
	}).done(function(a){
	});

$('.signin').on('click', function(){
  console.log('ingresar');
  window.location.replace('/signin');
});

let userLog = false;

$('#enviar').on('click', function(){
  let username = $('.username').val()
  let pass = $('.pass').val()
  
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/signin',
    data:{
      username: username,
      pass: pass,
    },
    statusCode: {
      '302': function() {
        window.location.replace('/');
        userLog = true;
      },
    },
  });
});

if (userLog == true) {
  let =
}


/*$('.upload').on('click', function(){
  const img = $('.img').val();
  const titulo = $('.titulo').val();
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/newpost',
    data: {
      url: img,
      title: titulo,
    }
  });
})
*/