// BEAN COUNTING

// Schrijf een functie die alle Hoofletter B's telt.
// Begin ergens met tellen
// Loop door de worden heen
// Als er een B is +1


// Schrijf een zlefde soort functie, maar nu geeft de tweede string aan om welke karakter het gaat.

// charAt() returns een karakter in een string.
//     --------------------------------------------------------------------------------

function countBs(string) {
  let count = 0
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      count++
    }
  }
  return (count);
}

console.log(countBs("BBC"));
// → 2

function countChar(string, character) {
  let count = 0
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === character) {
      count++
    }
  }
  return (count);
}

console.log(countChar("kakkerlak", "k"));
// → 4

// https://stackoverflow.com/questions/30240528/writing-a-bean-counter-for-eloquent-javascript-task