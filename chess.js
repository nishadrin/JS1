function vertical(letters) {
  var $chess = document.getElementById('chess');
  var $vertical = document.createElement('div');
  $vertical.className = "vertical";
  $chess.appendChild($vertical)

  for (var i in letters) {
    var $letter = document.createElement('div');
    $letter.className = "letter";
    $letter.textContent = letters[i];
    $vertical.appendChild($letter)
  }
}

function square(number, lastNumber) {
  var $chess = document.getElementById('chess');
  var $vertical = document.createElement('div');
  $vertical.className = "vertical";

  $chess.appendChild($vertical)

  for (var i = 0; i < lastNumber; i++) {
    var $square = document.createElement('div');

    if ( number % 2 === 0) {
      $square.className = "black";
    } else {
      $square.className = "white";
    }

    $vertical.appendChild($square)
  }
  var $number = document.createElement('div');
  $number.className = "number";
  $number.textContent = +number+1;

  $vertical.appendChild($number)
}

function chess() {
  var letters = ["A", "B", "C", "D", "E", "F", "G", "H"]
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8"]


  vertical(letters)
  var lastNumber = numbers.length
  for (var i in numbers) {
    square(i, lastNumber)
  }

}

chess()
