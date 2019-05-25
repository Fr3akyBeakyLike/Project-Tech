// DRIEHOEK loop:

//     #           Er moet steeds één # meer geloopt worden, 
//     ##          bij 7 #'jes moet de loop gestopt worden.
//     ###
//     ####
//     #####
//     ######
//     #######

// While maakt een statement die doorgaat zolang het de boolean true meegeeft.

//     --------------------------------------------------------------------------------

// Optie 1
let hekjes = '#';
while (hekjes.length <= 7) {
  console.log(hekjes);
  hekjes = hekjes + '#';
}

// Optie 2
for (let hekje = '#'; hekje.length <= 7; hekje = hekje + '#') {
  console.log(hekje);
}