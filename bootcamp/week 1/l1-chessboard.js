// CHESSBOARD

// # # # #   Maak een grid van 8.
// # # # #   Je loopt een rij die niet breder mag worden dan 8.
//  # # # #  In de loop maak je een nieuwe loop die ' ' , '#' invoegt.
// # # # #   Nadat de max breedte bereikt is voeg je "\n" in om een nieuwe lijn te starten.
//  # # # #  
// # # # # 
//  # # # #
// # # # #   Vergroot de grid door de variabele aan te passen.

// Een nieuwe lijn maak je met "\n".

//     --------------------------------------------------------------------------------

let grid = 8;
let invoeg = "";

for (var y = 0; y < grid; y++) {
  for (var x = 0; x < grid; x++) {
    if ((x + y) % 2 == 0)
      invoeg += " ";
    else
      invoeg += "#";
  }
  invoeg += "\n";
}

console.log(invoeg);

// GROTERE GRID
let grid = 20;
let invoeg = "";

for (var y = 0; y < grid; y++) {
  for (var x = 0; x < grid; x++) {
    if ((x + y) % 2 == 0)
      invoeg += " ";
    else
      invoeg += "#";
  }
  invoeg += "\n";
}

console.log(invoeg);