$.ajax({
		url: "http://localhost:3000/",
	}).done(function(a){
	});


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
        window.location.replace('/signin');
      },
      '400': function(){
        alert('Error')
      }
    },
  });
});


$('.add').on('click', function(){
  window.location.replace('/agregar');
});

$('.salir').on('click', function(){
  $.ajax({
    method: 'PUT',
    url: 'http://localhost:3000/signin',
    data: {
      id: false,
    },
    statusCode: {
      '302': function() {
        window.location.replace('/');
      } 
    }
  })
})

$('.newPost').on('click', function(){
  const name = $('.prodName').val();
  const img = $('.prodImg').val();
  const price = $('.prodPrice').val();
  $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/agregar',
    data: {
      name: name,
      img: img,
      price: price,
    }
  });
  window.location.replace('/signin')
});

$('.volver').on('click', function(){

  window.location.replace('/signin')
});
