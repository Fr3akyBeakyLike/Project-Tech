// FIZZBUZZ:

// Schrijf alle nummers van 1 t/m 100 uit in de console.
// Alle nummers die zijn te delen door 3 moeten "Fizz" meegeven in de console.
// Alle nummers die zijn te delen door 5 moeten "buzz" meegeven in de console.

// Alle nummers die zijn te delen door 3 en 5 moeten "FizzBuzz" meegeven in de console.

// && betekend "EN", || betekend "of"

//     --------------------------------------------------------------------------------
// Infinite loop crasht laptop!!!!!!!!!!!!!!!!!!!
// for (let getal = 1; getal <= 100; getal = getal++) {
//   if (getal % 3 == 1) {
//     console.log("Fizz");
//   } else if (getal % 5 == 1) {
//     console.log("Buzz");
//   } else {
//     console.log(getal);
//   }
// }

for (let getal = 1; getal <= 100; getal++) {
  if (getal % 3 == 0 && getal % 5 == 0) console.log("FizzBuzz");
  else if (getal % 3 == 0) console.log("Fizz");
  else if (getal % 5 == 0) console.log("Buzz");
  else console.log(getal);
}