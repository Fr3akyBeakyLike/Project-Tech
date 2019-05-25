// THE SUM OF A RANGE
// Schrijf een functie die twee argumenten meeneemt "start" en "end".
// Return een array die alles getallen van 1t/m 10 logt.

// Array.prototype.push zorgt ervoor dat er iets bij de array gezet wordt.
// Array.prototype.pop zorgt ervoor dat alleen het laatste in de array wordt weergegeven.

// Schrijf een sum functie die uitkomt op 55.

// Voeg een parameter genaamd "step" toe, de step beslist in welke stappen het getal omhoog/omlaag gaat.

//     --------------------------------------------------------------------------------
var range = function (start, end) {
  var array = []
  for (i = start; i <= end; i++) {
    array.push(i)
  }
  return array
}

var sum = function (array) {
  var total = 0
  for (i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55

// https://www.youtube.com/watch?v=1SgNqNqtVqA