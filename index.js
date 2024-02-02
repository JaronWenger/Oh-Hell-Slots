// index.js

const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let deck = [];
let playerHand = [];
let cpu1Hand = [];
let cpu2Hand = [];
let cpu3Hand = [];
let currentPlayerIndex = 0; // 0 for player, 1 for CPU1, 2 for CPU2, 3 for CPU3
let currentRound = 1;

function createDeck() {
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ suit, rank });
    }
  }
}

function shuffleDeck() {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}


function dealCards(numCards) {
    const hands = [playerHand, cpu1Hand, cpu2Hand, cpu3Hand];
    for (let i = 0; i < numCards; i++) {
      for (let j = 0; j < hands.length; j++) {
        hands[j].push(deck.pop());
      }
    }
  }

function displayHand(hand, elementId, isPlayer) {
    const handElement = document.getElementById(elementId);
    handElement.innerHTML = '';
    hand.forEach(card => {
      const cardDiv = document.createElement('div');
      cardDiv.textContent = `${card.rank} of ${card.suit}`;
      
      // Add a class to distinguish player's cards from CPUs' cards
      if (isPlayer) {
        cardDiv.classList.add('playerCard');
      } else {
        cardDiv.classList.add('cpuCard');
      }
  
      handElement.appendChild(cardDiv);
    });
  }

function displayHand(hand, elementId) {
  const handElement = document.getElementById(elementId);
  handElement.innerHTML = '';
  hand.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.textContent = `${card.rank} of ${card.suit}`;
    handElement.appendChild(cardDiv);
  });
}

function playRound() {
  // Players play a card for the current round
  if (currentPlayerIndex === 0) {
    // Player's turn
    alert('Player: It\'s your turn. Play a card!');
    // Implement logic for the player's turn (select a card from their hand)
    // For simplicity, let's assume the player plays the first card in their hand
    const playerCard = playerHand.shift();
    alert(`Player played: ${playerCard.rank} of ${playerCard.suit}`);
  } else {
    // CPU's turn
    const cpuHand = [cpu1Hand, cpu2Hand, cpu3Hand][currentPlayerIndex - 1];
    const cpuCard = cpuHand.shift();
    alert(`CPU ${currentPlayerIndex} played: ${cpuCard.rank} of ${cpuCard.suit}`);
  }

  // Switch to the next player
  currentPlayerIndex = (currentPlayerIndex + 1) % 4;

  // Display the updated hands
  displayHands();

  // Check if the round is over
  if (currentPlayerIndex === 0) {
    alert(`Round ${currentRound} is over!`);
    currentRound++;

    // Check if the game is over
    if (currentRound > 14) {
      alert('Game Over! All rounds completed.');
      return;
    }

    // Deal cards for the next round
    dealCards(currentRound <= 7 ? currentRound : 14 - currentRound);
    alert(`Dealing ${currentRound <= 7 ? currentRound : 14 - currentRound} cards for the next round.`);

    // Display the updated hands after dealing cards
    displayHands();
  }
}

function startGame() {
  createDeck();
  shuffleDeck();
  dealCards(7);

  // Display the game area
  document.getElementById('gameArea').style.display = 'block';

  // Display the initial hands
  displayHands();
}

// Event listener for the "Start Game" button
document.getElementById('startBtn').addEventListener('click', startGame);

// Initial display of hands
displayHands();