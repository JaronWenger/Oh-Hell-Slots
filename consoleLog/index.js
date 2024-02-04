


var winPercentage = 0;
var winPercentageArray = [];
const trumpCardValueArray = ["2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks", "As"];
const alphaCardValueArray = ["2s", "3s", "4s", "5s", "6s", "7s", "8s", "9s", "10s", "Js", "Qs", "Ks", "As"];

sim()

function sim() {
  const tableBody = document.querySelector('#winPercentageTable tbody');
  tableBody.innerHTML = '';
  // Get the table body to dynamically populate rows
  const newTableBody = document.querySelector('#winPercentageTable tbody');



  ////////////////////////////////////////////////
// Initialize a 2D array for win percentages
for (let i = 0; i < trumpCardValueArray.length; i++) {
  const rowArray = [];
  for (let j = 0; j < 13; j++) {
    rowArray.push(calculateWinPercentage(alphaCardValueArray[j],trumpCardValueArray[i]));
  }
  winPercentageArray.push(rowArray);
}

///////////////////////////////////////////////////



// Add rows to the table
for (let i = 0; i < 13; i++) {
  const row = newTableBody.insertRow();
  for (let j = 0; j < 14; j++) {
    const cell = row.insertCell(j);
    if (j === 0) {
      // Set column titles
      cell.textContent = trumpCardValueArray[i];
    } else {
      // Set values from the 2D array
      cell.textContent = winPercentageArray[i][j - 1];
    }
  }
}


}


////////////////////////////////////////////////// GET PERCENTAGES! /////////////////////////





/////////////RETURN PERCENTAGES
const newDeck = ["2s","3s","4s","5s","6s","7s","8s","9s","10s","Js","Qs","Ks","As","2c","3c","4c","5c","6c","7c","8c","9c","10c","Jc","Qc","Kc","Ac","2h","3h","4h","5h","6h","7h","8h","9h","10h","Jh","Qh","Kh","Ah","2d","3d","4d","5d","6d","7d","8d","9d","10d","Jd","Qd","Kd","Ad"];


////given these cards
function calculateWinPercentage(alphaX, trumpX) {
/////
console.log(newDeck);
  var newShuffledDeck = newShuffleDeck(newDeck);

  function newShuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
/////
var indexToRemove = newShuffledDeck.indexOf(alphaX);
var indexToRemove2 = newShuffledDeck.indexOf(trumpX);

// Create an array with the indices to remove and sort them
var indicesToRemove = [indexToRemove, indexToRemove2].sort((a, b) => b - a);

// Remove the cards from the newShuffledDeck in reverse order
indicesToRemove.forEach(index => {
    if (index !== -1) {
        newShuffledDeck.splice(index, 1);
    }
});

  var betaX = newShuffledDeck[0]
  ///All cards established





  if (alphaX === trumpX){
    return "_"
  } else {
  return `${alphaX},${trumpX}`;
}
}










