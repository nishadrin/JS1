function bascket(productsInBascket) {
  var $bascket = document.getElementById('JS6-1');

  var $bascketProduct = document.createElement('div');

  var sum = 0
  var quantity = 0
  textInBascket = ""

  if (productsInBascket.length === 0) {
    textInBascket = "Корзина пуста";
  } else {
    for (i in productsInBascket) {
      sum = sum + productsInBascket[i]["price"] * productsInBascket[i]["quantity"]
      quantity = quantity + productsInBascket[i]["quantity"]
      textInBascket = "В корзине: " + quantity + " товаров, на сумму: " + sum + " рублей."
    }
  }
  var $bascketProduct = document.getElementById('JS6-1')
  $bascketProduct.textContent = textInBascket
}

function catalogProducts(products) {
  var $catalogProducts = document.getElementById('catalog');

  for (var i = 0; i < products.length; i++) {
    var $bascketProductName = document.createElement('li');
    $bascketProductName.textContent = "Товар " + products[i].name + " стоимостью " + products[i].price;

    var $button = document.createElement('button');
    $button.id = "button"
    $button.classList = "button"
    $button.textContent = "Купить"

    $button.dataset.id = products[i].id
    $button.dataset.name = products[i].name
    $button.dataset.price = products[i].price

    var $bascketProduct = document.getElementById('catalog')
    var $bascketProduct = document.getElementById('catalog')

    $bascketProductName.appendChild($button)
    $catalogProducts.appendChild($bascketProductName)
  }
}

function isExistInBascket(id) {
  for (var i = 0; i < productsInBascket.length; i++) {
    if (productsInBascket[i] === id) {
      return true;
    }
  }
  return false;
}

function findId(id) {
  for (var i = 0; i < productsInBascket.length; i++) {
    if (productsInBascket[i] === id) {
      return i;
    }
  }
}

function handleButtonClick(event) {
  if (event.target.tagName === "BUTTON") {
    if (isExistInBascket(+event.target.dataset.id)) {
      var idProduct = findId(+event.target.dataset.id)
      productsInBascket[idProduct].quantity++;
    } else {
      productsInBascket.push(
        {
          id: +event.target.dataset.id,
          name: event.target.dataset.name,
          price: +event.target.dataset.price,
          quantity: 1,
        }
      )
    }
    bascket(productsInBascket)
  }
}

function init() {
  catalogProducts(products);

  var $catalog = document.querySelector('#catalog');
  $catalog.addEventListener('click', handleButtonClick);
}

var products = [
  {
    id: 1,
    name: "iphone",
    price: 70000,
  },
  {
    id: 2,
    name: "Защитное стекло",
    price: 1000,
  },
  {
    id: 3,
    name: "батарейка",
    price: 70,
  },
  {
    id: 4,
    name: "Наушники",
    price: 1500,
  },
  {
    id: 5,
    name: "Чехол",
    price: 1200,
  },
]

var productsInBascket = []

window.addEventListener('load', init);
