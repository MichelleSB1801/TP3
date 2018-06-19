let self = {}



var products = []	


self.getProducts = function() {
  return products
}



self.upload = function(data) {
  const nuevoprod = {
    foto: data.url,
    title: data.title,
    likes: 0,
    id: getId()
  }
  products.push(nuevopost)
}

function getId() {
  const length = products.length
  const newId = products[length - 1].id + 1

  return newId
}


module.exports = self