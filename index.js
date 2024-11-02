//1 Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?

const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

console.log("#1", names[3]);  // Maradonna, räkningen börjar på 0 med Zlatan så index 3 blir Maradonna.

//2 I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?

names.push("Drogba"); 

console.log("#2", names); //retur värdet är den nya längden på arrayen

//3 Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?

names.unshift("Figo"); 

console.log("#3", names);

//4 Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden.

const removedName = names.pop();

console.log("#4", removedName);
console.log("#4", names);

//5 Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.


// Ta bort sista elementet med pop() och spara det i en variabel
const lastName = names.pop();

// Lägg till elementet i början av arrayen med unshift()
names.unshift(lastName);

console.log("#5", names); // ["Ronaldo", "Figo", "Zlatan", "Beckham", "Zidane", "Maradona", "Pele"]

//6 


//7  metoderna som du har använt påverkar ursprungs-arrayn, alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar arrayen med en const-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?

const players = ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"];

// Använd includes för att kontrollera om "Messi" finns i arrayen
const hasMessi = players.includes("Messi");

console.log("#7", hasMessi); // false. returnerar true om elementet finns i arrayen och false om det inte gör det.

//8 Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). Om han finns, logga ut en bekräftande text, t.ex. "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."

if(players.includes("Zlatan")) {
    console.log("#8, Zlatan is among the players"); 

} else {
    console.log("#8, Zlatan not found")

}

//9 Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?

const indexOfMaradona = players.indexOf("Maradona");

console.log("#9", indexOfMaradona); //5, 6:e namnet har index 5

//10 Använd indexOf() för att försöka hitta indexet för "Messi" i "players". Vad returnerar indexOf() när elementet inte finns i arrayen, och hur kan den informationen vara användbar?

const indexOfMessi = players.indexOf("Messi");

console.log("#10", indexOfMessi); //-1, är bra om man vill utföra något om ett objekt ej finns i en array. 

//11 Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd join() för att göra detta och logga resultatet. 

const playersAsString = players.join(", ");

console.log("#11", playersAsString);

//12 Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?

const playersAsString2 = players.join("-");

console.log("#12", playersAsString2); //bindestreck mellan namnen utan mellanrum

//13 nvänd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.

players.splice(1, 2);
console.log("#13", players); //Raderar element och börjar på index 1 och vi vill ta bort 2 element, därav 1,2.


//14 Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?
// Lägg till "Ronaldinho" på index 2
const removedElements = players.splice(2, 0, "Ronaldinho");

//2 är indexpositionen där vi vill lägga till "Ronaldinho".0 anger att vi inte vill ta bort några element från arrayen.


console.log("#14", players); // ["Zlatan", "Beckham", "Ronaldinho", "Zidane", "Ronaldo", "Romario", "Maradona"]
console.log("#14", removedElements); // [] splice() returnerar en array med de borttagna elementen, eftersom det ej finns några borttagna element returneras här en tom array.

//15 Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.

// Hitta indexpositionen för "Ronaldo"
const indexOfRonaldo = players.indexOf("Ronaldo");

// Om "Ronaldo" finns i arrayen (index är inte -1), ta bort honom
if (indexOfRonaldo !== -1) {
  players.splice(indexOfRonaldo, 1);
}

console.log("#15", players); // ["Zlatan", "Beckham", "Zidane", "Romario", "Maradona"]

//16 Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.
// Använd slice för att få de tre första spelarna
const firstThreePlayers = players.slice(0, 3);

//slice() skapar en kopia utan att modifiera originalarrayen. slice() returnerar en ny array med de utvalda elementen och orginalarrayen är oförändrad.

console.log("#16", firstThreePlayers); // ["Zlatan", "Beckham", "Zidane"]
console.log("#16", players); // ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"]


//17 Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya arrayen, och vad blir kvar i "players"?

const playersFromIndex2 = players.slice(2);

//Den nya arrayen playersFromIndex2 innehåller spelarna från index 2 och framåt.
//Den ursprungliga arrayen players är oförändrad och innehåller fortfarande alla sina element. 

console.log("#17", playersFromIndex2); // ["Zidane", "Ronaldo", "Romario", "Maradona"]
console.log("#17", players); // ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"]


//18 Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?

const updatedPlayers = players.with(1, "Mbappé");

console.log("#18", updatedPlayers); // ["Zlatan", "Mbappé", "Zidane", "Ronaldo", "Romario", "Maradona"]
console.log("#18 ", players); // ["Zlatan", "Beckham", "Zidane", "Ronaldo", "Romario", "Maradona"]
//Den ursprungliga arrayen players är oförändrad och innehåller fortfarande sina ursprungliga värden.


//19 Utgå från arrayen nedan. Skriv en for-loop som skriver ut varje tal i arrayen.

const numbers = [5, 8, 12, 20, 3]; 

for (let i = 0; i < numbers.length; i++) {
    console.log("#19 ", numbers[i]);
}

// alternativt med for..of loop

for (const number of numbers) {
    console.log("#19 ", number);
}


//20 Använd en for-loop för att summera alla tal i arrayen numbers ovan. Logga ut summan efter att loopen har körts klart.

let sum = 0; // Variabel för att hålla summan

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // Lägg till talet vid index i till summan

    console.log("#20, Summan av talen är:", sum); // Skriv ut summan
}

// alternativt for..of loop

for (number of numbers) {
    sum += number; 

    console.log("#20, Summan av talen är: ", sum);
}



//21 Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.

let maxNumber = numbers[0]; // Initiera med det första talet i arrayen

for (let i = 1; i < numbers.length; i++) { // Starta från index 1 eftersom 0 redan är loggat
    if (numbers[i] > maxNumber) { // Om det aktuella talet är större än maxNumber
        maxNumber = numbers[i]; // Uppdatera maxNumber
    }
    console.log("#21, Det största talet är:", maxNumber); // Logga det största talet
}

//alternativt med en for..of loop som gör koden mer läsbar

let biggestNumber = 0;

for (const number of numbers) {
    if (number > biggestNumber) {
        biggestNumber = number;
    }
}
console.log(`#21, Biggest number is ${biggestNumber}`); 


//22 Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.

const doubledNumbers = []; // Skapa en tom array för att hålla dubblerade värden

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers[i] = numbers[i] * 2; // Multiplicera talet med 2 och lägg till i doubledNumbers
}

console.log("#22, Doubled Numbers:", doubledNumbers); // Logga den nya arrayen


//alternativt med for.. of loop

const doubleNumbers = [];

for (const number of numbers) {
    doubleNumbers.push(number * 2);
}

console.log("#22.", numbers);
console.log("#22.", doubleNumbers);

//23 Använd en for-loop för att räkna ut medelvärdet av talen i numbers. Logga ut medelvärdet.

let summa = 0; // Variabel för att hålla summan av talen

// Loop för att summera talen
for (let i = 0; i < numbers.length; i++) {
    summa += numbers[i]; // Lägg till varje tal till summan
}

// Beräkna medelvärdet
let average = summa / numbers.length;

console.log("#23, Medelvärdet är:", average); // Medelvärdet är: 9.6

//alternativt en for of loop

summa = 0; // Nollställer summa för nästa beräkning

for (let number of numbers) {
    summa += number; 
}

let average2 = summa / numbers.length;

console.log("#23, Medelvärdet är:", average2);


//24 Skriv en for-loop som hittar och loggar ut det minsta talet i numbers.

let minNumber = numbers[0]; 

for (let i =1; i < numbers.length; i++) {
    if (numbers[i] < minNumber) {
        minNumber = numbers[i];
    }
}

console.log("#24, Det minsta talet är: ", minNumber);


// alternativt en for of loop

let smallestNumber =  numbers[0]; // Starta med det första elementet

for (let number of numbers) {

    if (number < smallestNumber) {
        smallestNumber = number;
    }

}

console.log("#24 ", smallestNumber);


//25 Skapa en ny array som heter positiveNumbers och fyll den med endast de positiva talen från arrayen nedan. Använd en for-loop och en if-sats.

const mixedNumbers = [3, -5, 12, -1, 8, -6];
const positiveNumbers = []; // Skapa en tom array för positiva tal

// Loopar genom arrayen mixedNumbers
for (let i = 0; i < mixedNumbers.length; i++) {
    // Kontrollera om talet är positivt
    if (mixedNumbers[i] > 0) {
        positiveNumbers.push(mixedNumbers[i]); // Lägg till positiva tal i positiveNumbers
    }
}

console.log("#25, Positiva tal:", positiveNumbers); // Logga den nya arrayen

//alternativt en for of loop 

const positiveNumbers2 = [];

for (let number of mixedNumbers) {
    if (number > 0) {
        positiveNumbers2.push(number);
    }
}


//26 Utgå från arrayen mixedNumbers. Skriv en for-loop utan att använda index, där du loggar varje positivt tal.

// Loopar genom varje tal i mixedNumbers

for (const number of mixedNumbers) {
    // Kontrollera om talet är positivt
    if (number > 0) {

        console.log("#26, Positivt tal:", number); // Logga det positiva talet
    }
}


//27 Använd en while-loop för att logga alla tal i arrayen numbers från och med index 0. Avbryt loopen om talet är större än 10.

let index1 = 0; // Starta med index 0

// Använd en while-loop för att logga talen
while (index1 < numbers.length) {
    const currentNumber = numbers[index1]; // Hämta det aktuella talet

    // Logga talet
    console.log("#27", currentNumber);

    // Avbryt loopen om talet är större än 10
    if (currentNumber > 10) {
        break; // Avbryt loopen
    }

    index1++; // Gå till nästa index
}

//28 Utgå från arrayen mixedNumbers ovan. Använd en while-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.

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
console.log("#28, Antalet negativa tal:", negativeCount);


// 29 Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

for (word of words) {
const numberOfCharacters = word.length;
console.log(`#29, word: ${word}. it has ${numberOfCharacters} characters.`);
}

//30 Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.

let firstLetters = "";

for (let i = 0; i < words.length; i++) {
    firstLetters += words[i][0]; 
}
console.log("#30", firstLetters);

// 31 Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.

let summan = 0;
let i = 0;

while (i < numbers.length && summan < 25) {
    console.log(numbers[i]);
    summan += numbers[i];
    i++
  }

//32 Använd en for-loop utan index för att summera alla värden i arrayen mixedNumbers. Logga ut summan.

let mixedNumberSum = 0;

for (let mn of mixedNumbers) {
    mixedNumberSum += mn;
   
  }
  console.log(`#32, Sum is ${mixedNumberSum}`);

  //33  Skapa en array temperatures (exempel nedan) med några temperaturer i Celsius. Använd en for-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.

const temperatures = [15, 22, 19, 30, 28, 18, 25];

let highestTemp = 0; 
let maxIndex = 0;

for (let i = 0; i < temperatures.length; i++) {
if (temperatures[i] > highestTemp) {
    highestTemp = temperatures[i];
        maxIndex = i;
    
}
}
console.log("#33", highestTemp);
console.log("#33", maxIndex);

//34 Använd en for-loop för att räkna antalet ord i words-arrayen som innehåller fler än fem bokstäver

let count = 0;

for (let i = 0; i < words.length; i++) {
    if (words[i].length > 5) {
        count++
    }
}

console.log("#34, Antalet ord med fler än fem bokstäver är: ", count);

// 35 Skriv en while-loop som räknar upp talen från numbers-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.

let n = 0;

while (n < numbers.length) {
    if (numbers[n] % 2 !== 0) {
        console.log("#35, Första udda talet är: ", numbers[n]);
        break; 
    }
    n++
}