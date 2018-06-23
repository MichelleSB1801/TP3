let self = {}



var products = []	


self.getProducts = function() {
  return products
}



self.upload = function(data) {
  const nuevoprod = {
    name: data.name,
    img: data.img,
    price: data.price,
  }
  products.push(nuevoprod)
  console.log(products, 'service')
}


module.exports = self