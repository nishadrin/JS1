function bascket(productsInBascket) {
  var $bascket = document.getElementById('bascket');

  var $bascketProduct = document.createElement('div');

  if (productsInBascket.length === 0) {
    $bascketProduct.textContent = "Корзина пуста";
  } else {
    var sum = 0
    for (i in productsInBascket) {
      sum = sum + productsInBascket[i]["price"] * productsInBascket[i]["quantity"]
      $bascketProduct.textContent = "В корзине: " + i + " товаров, на сумму: " + sum + " рублей."
    }
  }

  $bascket.appendChild($bascketProduct)
}

var productsInBascket = [
  {
    name: "iphone",
    price: 70000,
    quantity: 1,
  },
  {
    name: "Защитное стекло",
    price: 1000,
    quantity: 3,
  },
  {
    name: "батарейка",
    price: 70,
    quantity: 10,
  }
]

bascket(productsInBascket)
