//1
const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

console.log(names[3]);  // Maradonna, räkningen börjar på 0 med Zlatan så index 3 blir MAradonna.

//2
names.push("Drogba"); 

console.log(names); //reur värdet är den nya längden på arrayen

//3
names.unshift("Figo"); 

console.log(names);

//4
const removedName = names.pop();

console.log(removedName);
console.log(names);

//5
// Ta bort sista elementet med pop() och spara det i en variabel
const lastName = names.pop();

// Lägg till elementet i början av arrayen med unshift()
names.unshift(lastName);

console.log(names); // ["Ronaldo", "Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele"]


//7
const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// Använd includes för att kontrollera om "Messi" finns i arrayen
const hasMessi = players.includes("Messi");

console.log(hasMessi); // false. returnerar true om elementet finns i arrayen och false om det inte gör det.

//8
if(players.includes("Zlatan")) {
    console.log("Zlatan is among the players"); 
} else {
    console.log("Zlatan not found")
}

//9
const indexOfMaradona = players.indexOf("Maradona");

console.log(indexOfMaradona); //5, 6:e namnet har index 5

//10
const indexOfMessi = players.indexOf("Messi");

console.log(indexOfMessi); //-1, är bra om man vill utföra något om ett objekt ej finns i en array. 

//11
const playersAsString = players.join(" ");

console.log(playersAsString);

//12
const playersAsString2 = players.join("-");

console.log(playersAsString2); //bindestreck mellan namnen

//13
players.splice(1, 2);
console.log(players); //Raderar element och börjar på index 1 och vi vill ta bort 2 element, därav 1,2.


//14
// Lägg till "Ronaldinho" på index 2
const removedElements = players.splice(2, 0, "Ronaldinho");

//2 är indexpositionen där vi vill lägga till "Ronaldinho".0 anger att vi inte vill ta bort några element från arrayen.


console.log(players); // ["Zlatan", "Beckham", "Ronaldinho", "Zidane", "Ronaldo", "Romario", "Maradona"]
console.log(removedElements); // []

//15
// Hitta indexpositionen för "Ronaldo"
const index = players.indexOf("Ronaldo");

// Om "Ronaldo" finns i arrayen (index är inte -1), ta bort honom
if (index !== -1) {
  players.splice(index, 1);
}

console.log(players); // ["Zlatan", "Beckham", "Zidane", "Romario", "Maradona"]

//16
// Använd slice för att få de tre första spelarna
const firstThreePlayers = players.slice(0, 3);

//slice() skapar en kopia utan att modifiera originalarrayen.

console.log(firstThreePlayers); // ["Zlatan", "Beckham", "Zidane"]
console.log(players); // ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"]


//17
const playersFromIndex2 = players.slice(2);

//Den nya arrayen playersFromIndex2 innehåller spelarna från index 2 och framåt.
//Den ursprungliga arrayen players är oförändrad och innehåller fortfarande alla sina element. 

console.log(playersFromIndex2); // ["Zidane", "Ronaldo", "Romario", "Maradona"]
console.log(players); // ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"]


//18
const updatedPlayers = players.with(1, "Mbappé");

console.log(updatedPlayers); // ["Zlatan", "Mbappé", "Zidane", "Ronaldo", "Romario", "Maradona"]
console.log(players); // ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"]
//Den ursprungliga arrayen players är oförändrad och innehåller fortfarande sina ursprungliga värden.


//19
const numbers = [5, 8, 12, 20, 3]; 

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//20
let sum = 0; // Variabel för att hålla summan

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Lägg till talet vid index i till summan
}

console.log("Summan av talen är:", sum); // Skriv ut summan


//21
let maxNumber = numbers[0]; // Initiera med det första talet i arrayen

for (let i = 1; i < numbers.length; i++) { // Starta från index 1 eftersom 0 redan är loggat
    if (numbers[i] > maxNumber) { // Om det aktuella talet är större än maxNumber
        maxNumber = numbers[i]; // Uppdatera maxNumber
    }
}

console.log("Det största talet är:", maxNumber); // Logga det största talet


//22
const doubledNumbers = []; // Skapa en tom array för att hålla dubblerade värden
for (let i = 0; i < numbers.length; i++) {
    doubledNumbers[i] = numbers[i] * 2; // Multiplicera talet med 2 och lägg till i doubledNumbers
}

console.log("Doubled Numbers:", doubledNumbers); // Logga den nya arrayen


//23
let summa = 0; // Variabel för att hålla summan av talen

// Loop för att summera talen
for (let i = 0; i < numbers.length; i++) {
    summa += numbers[i]; // Lägg till varje tal till summan
}

// Beräkna medelvärdet
let average = summa / numbers.length;

console.log("Medelvärdet är:", average); // Medelvärdet är: 9.6


//24
let minNumber = numbers[0]; 

for (let i =1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}
console.log("Det minsta talet är: ", minNumber);


//25
const mixedNumbers = [3, -5, 12, -1, 8, -6];
const positiveNumbers = []; // Skapa en tom array för positiva tal

// Loopar genom arrayen mixedNumbers
for (let i = 0; i < mixedNumbers.length; i++) {
    // Kontrollera om talet är positivt
    if (mixedNumbers[i] > 0) {
        positiveNumbers.push(mixedNumbers[i]); // Lägg till positiva tal i positiveNumbers
    }
}

console.log("Positiva tal:", positiveNumbers); // Logga den nya arrayen


//26
// Loopar genom varje tal i mixedNumbers
for (const number of mixedNumbers) {
    // Kontrollera om talet är positivt
    if (number > 0) {
        console.log("Positivt tal:", number); // Logga det positiva talet
    }
}


//27
let index1 = 0; // Starta med index 0

// Använd en while-loop för att logga talen
while (index1 < numbers.length) {
    const currentNumber = numbers[index1]; // Hämta det aktuella talet

    // Logga talet
    console.log(currentNumber);

    // Avbryt loopen om talet är större än 10
    if (currentNumber > 10) {
        break; // Avbryt loopen
    }

    index1++; // Gå till nästa index
}

//28
let index2 = 0; // Startar med index 0
let negativeCount = 0; // Räknare för negativa tal

// Använd en while-loop för att räkna negativa tal
while (index2 < mixedNumbers.length) {
    if (mixedNumbers[index2] < 0) { // Kontrollera om talet är negativt
        negativeCount++; // Öka räknaren med 1
    }
    index2++; // Gå till nästa index
}

// Logga antalet negativa tal
console.log("Antalet negativa tal:", negativeCount);