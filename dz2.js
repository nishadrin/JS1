/*
1. Почему код дает именно такие результаты?
*/
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 // выполняется ++а, после присвоение (а = 2)
d = b++; alert(d);           // 1 // выполняется присвоение, после b++ (b = 2)
c = (2+ ++a); alert(c);      // 5 // выполняется присвоение к а = 2, еще +1 (++а) (итого а = 3) и прибавляется 2
d = (2+ b++); alert(d);      // 4 // b = 2, +2, итого 4, b++ (b=3)
alert(a);                    // 3 // a = 3
alert(b);                    // 3 // b = 3


/*
2. Чему будет равен x?
*/
var a = 2;
var x = 1 + (a *= 2);

x = 1 + (a*2) = 1 + (2*2) = 5


/*
3. Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму;

*Ноль можно считать положительным числом.
*/
var a = 5, b = -4

if (a >= 0 && b >= 0) {
  alert(a-b)
} else if (a < 0 && b < 0) {
  alert(a*b)
} else {
  alert(a+b)
}


/*
4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
*/
var a = Math.round(Math.random() * 15)

switch (a) {
  case 0:
    alert(0)
  case 1:
    alert(1)
  case 2:
    alert(2)
  case 3:
    alert(3)
  case 4:
    alert(4)
  case 5:
    alert(5)
  case 6:
    alert(6)
  case 7:
    alert(7)
  case 8:
    alert(8)
  case 9:
    alert(9)
  case 10:
    alert(10)
  case 11:
    alert(11)
  case 12:
    alert(12)
  case 13:
    alert(13)
  case 14:
    alert(14)
  case 15:
    alert(15)
}


/*
5. Реализовать четыре основные арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
*/
function plus(a, b) {
  return a+b
}

function minus(a, b) {
  return a-b
}

function delit(a, b) {
  return a/b
}

function umnogit(a, b) {
  return a*b
}

/*

6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции.
В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).
*/

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case plus:
      return plus(arg1, arg2)
      break;
    case minus:
      return minus(arg1, arg2)
      break;
    case delit:
      return delit(arg1, arg2)
      break;
    case umnogit:
      return umnogit(arg1, arg2)
      break;
  }
}

/*
7. * Сравнить null и 0. Объяснить результат.
*/

// Значения null и undefined могут быть равны только между собой. Это прописано в спецификации языка.
/*

8. * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.
*/

function power(val, pow) {
  if (pow === 1) {
    return val;
  }

  return val * power(val, pow-1)
}
