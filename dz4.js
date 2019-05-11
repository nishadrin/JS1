// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, надо получить на выходе объект,
// в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо получить следующий
// объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение
// с помощью console.log и вернуть пустой объект.

function objectNumFun(num) {
  var objectNum = {
    "hundreds": null,
    "dozens": null,
    "units": null,
  }
  if (num > 999 || num < 0) {
    console.log("Число должно быть от 0 до 999")
    return objectNum
  } else {
    var num = String(num).split("");
    if (num.length === 3) {
      objectNum["hundreds"] = num[0]
      objectNum["dozens"] = num[1]
      objectNum["units"] = num[2]
    } else if (num.length === 2) {
      objectNum["dozens"] = num[0]
      objectNum["units"] = num[1]
    } else {
      objectNum["units"] = num[0]
    }

    return objectNum
  }
}
num = +prompt("Введите число")
console.log(objectNumFun(num))

// 2. Продолжить работу с интернет-магазином:
// a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
// b. Реализуйте такие объекты.
// c. Перенести функционал подсчета корзины на объектно-ориентированную базу.

var bascket = {
  items: [["наушники", 2400, 2],["утюг", 1400, 1],["чайник", 990, 3],["мкроволновая печь", 1990, 1]],
  itemsCost: function() {
    var bascketPrice = 0
    for (var i = 0; i < this.items.length; i++) {
      goodCost = this.items[i][1]*this.items[i][2]
      bascketPrice = bascketPrice + goodCost
    }
    console.log(bascketPrice)
  }
}

// 3. * Подумать над глобальными сущностями. К примеру, сущность «Продукт» в интернет-магазине актуальна не только для корзины,
// но и для каталога. Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта,
// но в разных местах давал возможность вызывать разные методы.

var products = {
  items: [["наушники", 2400, 2],["утюг", 1400, 1],["чайник", 990, 3],["мкроволновая печь", 1990, 1]],
  itemsCost: function() {
    var bascketPrice = 0
    for (var i = 0; i < this.items.length; i++) {
      goodCost = this.items[i][1]*this.items[i][2]
      bascketPrice = bascketPrice + goodCost
    }
    console.log(bascketPrice)
  },
  itmesList: function() {
    for (var i = 0; i < this.items.length; i++) {
      console.log("Товар: " + this.items[i][0] + ", кол-во: " + this.items[i][2] + ", стоимость: " + this.items[i][1] + ", общая стоимость: " + this.items[i][1]*this.items[i][2])
    }
  }
}
