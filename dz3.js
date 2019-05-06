// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function simpleNumber(number) {
  if (number < 2) {
    return false;
  }
  var count = 2;
  while (count < number) {
    if (number % count === 0) {
      return false;
    }
    count++;
  }
  return true;
}

function getSimple(max) {
  var i = 0
  var list = []

  while (i < max) {
    if (simpleNumber(i)) {
      list.push(i)
    }
    i++
  }
  console.log(list)
}

getSimple(100)

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины.
// Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

var bascket = [["наушники", 2400, 2],["утюг", 1400, 1],["чайник", 990, 3],["мкроволновая печь", 1990, 1]]

// 3. Товары в корзине хранятся в массиве. Задачи:
// а. Организовать такой массив для хранения товаров в корзине;
// b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice() {
  var bascketPrice = 0
  for (var i = 0; i < bascket.length; i++) {
    goodCost = bascket[i][1]*bascket[i][2]
    bascketPrice = bascketPrice + goodCost
  }
  console.log(bascketPrice)
}

// 4. *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (var i = 0; i < 10; i++, console.log(i)) {}

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

var count = ""
for (var i = 0; i < 20; i++) {
  count+="x"
  console.log(count)
}
