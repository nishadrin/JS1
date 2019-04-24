// Комментарий
/*
comment
*/

var firstNameEnter = "Nick";

var USD_RATE = 65; // константа, пишется большими буквами, то что не нужно менять

var rubles = 100 * USD_RATE;

var isExist = true; // добавляем через is (все булевые значения)

/*
undefined // когда в перменной ничего нету, только создана и ничего не добавляли в переменную
null // пустое значение, уже было в использовании
*/

/*
object
*/
var human = {
  firstName: "Nick",
  lastName: "ivanov",
  age: 28
}

typeof human // вывод будет object, для определения типа данных
//typeof null = object - офф баг в языке

var amount = prompt("Введите сумму") // = input() *python

alert("Привет мир!") // = print() *python

// ps можно без ;

alert('Получилось: ' + amount + 'рублей'); // конкатенация
