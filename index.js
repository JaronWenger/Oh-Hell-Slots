var round = 1;
var points = 0;
var cpuPoints = 0;
var cpuBidTracker = 0;
var trump = false;
var playerOnesTurn = false;
var lead = 5;

const Spades = ["2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","Js.png","Qs.png","Ks.png","As.png"];
const Clubs = ["2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","Jc.png","Qc.png","Kc.png","Ac.png"];
const Hearts = ["2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","Jh.png","Qh.png","Kh.png","Ah.png"];
const Diamonds = ["2d.png","3d.png","4d.png","5d.png","6d.png","7d.png","8d.png","9d.png","10d.png","Jd.png","Qd.png","Kd.png","Ad.png"];

const deck = ["2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","Js.png","Qs.png","Ks.png","As.png","2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","Jc.png","Qc.png","Kc.png","Ac.png","2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","Jh.png","Qh.png","Kh.png","Ah.png","2d.png","3d.png","4d.png","5d.png","6d.png","7d.png","8d.png","9d.png","10d.png","Jd.png","Qd.png","Kd.png","Ad.png"];
var shuffledDeck = shuffleDeck(deck);

function shuffleDeck(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

/////FIRST ACTION////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  //////SET TRUMP BUTTON TO SHUFFLE
  var refreshImage = document.getElementById('trump-card');
  if (refreshImage) {
    refreshImage.addEventListener('click', function() {
      // Reload the page when the image is clicked
      shuffleHands()
    });
  }
  /////FIRST ROUND://///////
  establishLead()
  playerDeal()
  trumpDeal()


  //BID////////////////////
  var myButton = document.getElementById('0');
  if (myButton) {
    myButton.addEventListener('click', function() {
      // Call your function when the button is clicked
      playRound(0);
    });
  }
  var myButton = document.getElementById('1');
  if (myButton) {
    myButton.addEventListener('click', function() {
      // Call your function when the button is clicked
      playRound(1);
    });
  }
});
/////////////////////////////////////////////////////////
/////////////////////TRUMP CARD PRESSED/////////////////////////
/////////////////////TRUMP CARD PRESSED/////////////////////////
/////////////////////TRUMP CARD PRESSED/////////////////////////
function shuffleHands() {
  round++

  ////reset cpu bet
  var cpuBet = document.getElementById('cpuBid');
  cpuBet.innerHTML = "";
  cpuBet.style.opacity = "0%";



  var heading = document.getElementById("round");
  heading.innerHTML = ("ROUND: " + round);

  resetLeads();

  const shuffledDeck = shuffleDeck(deck);

  establishLead()

  playerDeal()

  trumpDeal()

  var cpuCard = document.getElementById('computer-card');
  cpuCard.src = "./images/bike.png";
}





function establishLead() {
  //LEAD ESTABLISHED
//var randomLead = Math.floor(Math.random() * 2);
lead++;

// Use modulus to loop back to the first player after the 6th player
lead %= 6;

switch (lead) {
  case 0:
      ///change lead to player one
    var pLead = document.getElementById('pDot');
    pLead.style.backgroundColor = "rgb(0, 126, 40)";
    pLead.style.height = "60px";
    pLead.style.width = "60px";
    playerOnesTurn = true;
    break;

  case 1:
  //change lead to EPSILON
  var eLead = document.getElementById('eDot');
  eLead.style.backgroundColor = "rgb(0, 126, 40)";
  eLead.style.height = "60px";
  eLead.style.width = "60px";
  eLead.style.left = "380px"
  eLead.style.bottom = "385px"

  playerOnesTurn = false;
  cpuBet(3, "eBid")
    break;

  case 2:
  //change lead to THETA
  var tLead = document.getElementById('tDot');
  tLead.style.backgroundColor = "rgb(0, 126, 40)";
  tLead.style.height = "60px";
  tLead.style.width = "60px";
  tLead.style.left = "380px"
  tLead.style.top = "180px"

  playerOnesTurn = false;
  cpuBet(4, "tBid")
    break;
  case 3:
  //change lead to BETA
  var bLead = document.getElementById('cDot');
  bLead.style.backgroundColor = "rgb(0, 126, 40)";
  bLead.style.height = "60px";
  bLead.style.width = "60px";
  bLead.style.top = "25px"

  playerOnesTurn = false;
  cpuBet(5, "cBid")
    break;
  case 4:
  //change lead to GAMMA
  var gLead = document.getElementById('gDot');
  gLead.style.backgroundColor = "rgb(0, 126, 40)";
  gLead.style.height = "60px";
  gLead.style.width = "60px";
  gLead.style.top = "180px";
  gLead.style.right = "380px";

  playerOnesTurn = false;
  cpuBet(6, "gBid")
    break;
  case 5:
  //change lead to DELTA
  var dLead = document.getElementById('dDot');
  dLead.style.backgroundColor = "rgb(0, 126, 40)";
  dLead.style.height = "60px";
  dLead.style.width = "60px";
  dLead.style.bottom = "385px";
  dLead.style.right = "380px";

  playerOnesTurn = false;
  cpuBet(7, "dBid")
    break;
}
}///////////////////////
////////////////////////
function resetLeads() {
  //reset all
  var pLead = document.getElementById('pDot');
  pLead.style.backgroundColor = "rgb(0, 0, 0)";
  pLead.style.height = "20px";
  pLead.style.width = "20px";
  

  //reset oposite
  var cLead = document.getElementById('cDot');
  cLead.style.backgroundColor = "rgb(0, 0, 0)";
  cLead.style.height = "20px";
  cLead.style.width = "20px";
  cLead.style.top = "50px";


  var eLead = document.getElementById('eDot');
  eLead.style.backgroundColor = "rgb(0, 0, 0)";
  eLead.style.height = "20px";
  eLead.style.width = "20px";
  eLead.style.left = "400px"
  eLead.style.bottom = "400px"




  var tLead = document.getElementById('tDot');
  tLead.style.backgroundColor = "rgb(0, 0, 0)";
  tLead.style.height = "20px";
  tLead.style.width = "20px";
  tLead.style.left = "400px";
  tLead.style.top = "200px";




  var gLead = document.getElementById('gDot');
  gLead.style.backgroundColor = "rgb(0, 0, 0)";
  gLead.style.height = "20px";
  gLead.style.width = "20px";
  gLead.style.top = "200px";
  gLead.style.right = "400px";




  var dLead = document.getElementById('dDot');
  dLead.style.backgroundColor = "rgb(0, 0, 0)";
  dLead.style.height = "20px";
  dLead.style.width = "20px";
  dLead.style.bottom = "400px";
  dLead.style.right = "400px";

}






function cpuBet(num, computerBid) {
  const tCard = shuffledDeck[2];
  const cCard = shuffledDeck[num];
  // Establish trump Suit
  let tSuit;
  if (Spades.includes(tCard)) {
    tSuit = "S";
  } else if (Clubs.includes(tCard)) {
    tSuit = "C";
  } else if (Hearts.includes(tCard)) {
    tSuit = "H";
  } else if (Diamonds.includes(tCard)) {
    tSuit = "D";
  }
  // Establish cpu Suit
  let cSuit;
  let suit;
  if (Spades.includes(cCard)) {
    cSuit = "S";
    suit = Spades
  } else if (Clubs.includes(cCard)) {
    cSuit = "C";
    suit = Clubs
  } else if (Hearts.includes(cCard)) {
    cSuit = "H";
    suit = Hearts
  } else if (Diamonds.includes(cCard)) {
    cSuit = "D";
    suit = Diamonds
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////      COMPUTER BID STRATEGY         /////////////////////////////////////////////////////////////////////////////////
  // Does the computer have trump?
  var cpuBet = document.getElementById(computerBid);
  const index = suit.indexOf(cCard);

  if (tSuit === cSuit) {
    trump = true
    if (index > 0){
/////Bid 1
      cpuBet.innerHTML = "1";
      cpuBet.style.opacity = "100%";
      cpuBidTracker = 1
    }else{
////Bid 0      
      cpuBet.innerHTML = "1";
      cpuBet.style.opacity = "100%";
      cpuBidTracker = 1
    }

  } else {
    trump = false
    if (index > 6){
      /////Bid 1
            cpuBet.innerHTML = "1";
            cpuBet.style.opacity = "100%";
            cpuBidTracker = 1
          }else{
      ////Bid 0      
            cpuBet.innerHTML = "1";
            cpuBet.style.opacity = "100%";
            cpuBidTracker = 1
          }
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function playerDeal() {
  //PLAYERS CARD DEAL
  var imageElement = document.getElementById('player-card');
  if (imageElement) {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * shuffledDeck.length);

    // Set the image source to the randomly chosen image path
    imageElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[0];
  }
}
function trumpDeal() {
    //TRUMP CARD DEAL
    var trumpElement = document.getElementById('trump-card');
    if (trumpElement) {
      // Get a random index from the array
      var randomIndex = Math.floor(Math.random() * shuffledDeck.length);
  
      // Set the image source to the randomly chosen image path
      trumpElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[2];
    }
}























///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////       PLAY BALL         ////////////////////////////////////////////////////////////////////////////////
function playRound(bid) {
  
  var cpuCardElement = document.getElementById('computer-card');
  cpuCardElement.src = "./images/PNG-cards-1.3/" + shuffledDeck[1];

  const playerCard = shuffledDeck[0];
  const trumpCard = shuffledDeck[2];
  const cpuCard = shuffledDeck[1];

  // Establish trump Suit
  let tSuit;
  let trumpSuit;
  if (Spades.includes(trumpCard)) {
    tSuit = "S";
    trumpSuit = Spades
  } else if (Clubs.includes(trumpCard)) {
    tSuit = "C";
    trumpSuit = Clubs
  } else if (Hearts.includes(trumpCard)) {
    tSuit = "H";
    trumpSuit = Hearts
  } else if (Diamonds.includes(trumpCard)) {
    tSuit = "D";
    trumpSuit = Diamonds
  }

  // Establish cpu Suit
  let cSuit;
  let cpuSuit;
  if (Spades.includes(cpuCard)) {
    cSuit = "S";
    cpuSuit = Spades
  } else if (Clubs.includes(cpuCard)) {
    cSuit = "C";
    cpuSuit = Clubs
  } else if (Hearts.includes(cpuCard)) {
    cSuit = "H";
    cpuSuit = Hearts
  } else if (Diamonds.includes(cpuCard)) {
    cSuit = "D";
    cpuSuit = Diamonds
  }

    // Establish player Suit
    let pSuit;
    let playerSuit;
    if (Spades.includes(playerCard)) {
      pSuit = "S";
      playerSuit = Spades
    } else if (Clubs.includes(playerCard)) {
      pSuit = "C";
      playerSuit = Clubs
    } else if (Hearts.includes(playerCard)) {
      pSuit = "H";
      playerSuit = Hearts
    } else if (Diamonds.includes(playerCard)) {
      pSuit = "D";
      playerSuit = Diamonds
    }





    ///////////////////winning or losing the trick
    var pIndex = playerSuit.indexOf(playerCard)
    var cIndex = cpuSuit.indexOf(cpuCard)
    var tIndex = trumpSuit.indexOf(trumpCard)

    if (pSuit === tSuit && cSuit !== tSuit){
      trump = false
      ///player wins hand
      winScore(bid)
      cpuBetOnPlayerOnesTurn(cIndex)
      cpuLoseScore(cIndex)

    } else if (pSuit === tSuit && cSuit === tSuit) {
      trump = true
      if (pIndex > cIndex){
        ///player wins hand
        winScore(bid)
        cpuBetOnPlayerOnesTurn(cIndex)
        cpuLoseScore(cIndex)
      } else {
        ///computer wins hand
        loseScore(bid)
        cpuBetOnPlayerOnesTurn(cIndex)
        cpuWinScore(cIndex)
      }
    

    } else if (pSuit !== tSuit && cSuit === tSuit){
      trump = true
      ///computer wins hand
      loseScore(bid)
      cpuBetOnPlayerOnesTurn(cIndex)
      cpuWinScore(cIndex)

    } else if (playerOnesTurn && pSuit !== cSuit){
      trump = false
      ///Player wins hand
      winScore(bid)
      cpuBetOnPlayerOnesTurn(cIndex)
      cpuLoseScore(cIndex)
    } else if (!playerOnesTurn && pSuit !== cSuit){
      trump = false
      ///computer wins hand
      loseScore(bid)
      cpuBetOnPlayerOnesTurn(cIndex)
      cpuWinScore(cIndex)
    } else if (playerOnesTurn && pSuit === cSuit){
      trump = false
      if (pIndex > cIndex){
        ///player wins hand
        winScore(bid)
        cpuBetOnPlayerOnesTurn(cIndex)
        cpuLoseScore(cIndex)
      }else{
        ///computer wins hand
        loseScore(bid)
        cpuBetOnPlayerOnesTurn(cIndex)
        cpuWinScore(cIndex)
      }
    } else if (!playerOnesTurn && pSuit === cSuit){
      trump = false
      if (pIndex > cIndex){
        ///player wins hand
        winScore(bid)
        cpuBetOnPlayerOnesTurn(cIndex)
        cpuLoseScore(cIndex)
      } else {
        ///computer wins hand
        loseScore(bid)
        cpuBetOnPlayerOnesTurn(cIndex)
        cpuWinScore(cIndex)
      }
    }

}

function winScore(bid) {
  if (bid === 1){
    points = points + 11;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  } else if (bid === 0) {
    points = points - 1;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  }
}
function loseScore(bid) {
  if (bid === 1){
    points = points - 1;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  } else if (bid === 0){
    points = points + 10;
    var scoreHeading = document.getElementById("points");
    scoreHeading.innerHTML = ("A: " + points);
  }
}
///////////////////////////////////////////////////cpu bid when not leading////////////////////////////////////
function cpuWinScore(cIndex) {
  if (cpuBidTracker === 1){
    cpuPoints = cpuPoints + 11;
    var scoreHeading = document.getElementById("cpuPoints");
    scoreHeading.innerHTML = ("B: " + cpuPoints);
  } else if (cpuBidTracker === 0) {
    cpuPoints = cpuPoints - 1;
    var scoreHeading = document.getElementById("cpuPoints");
    scoreHeading.innerHTML = ("B: " + cpuPoints);
  }
}
///////////////////////////////////////////////////cpu bid when not leading////////////////////////////////////
function cpuLoseScore(cIndex) {
  if (cpuBidTracker === 1){
    cpuPoints = cpuPoints - 1;
    var cpuScoreHeading = document.getElementById("cpuPoints");
    cpuScoreHeading.innerHTML = ("B: " + cpuPoints);
  } else if (cpuBidTracker === 0){
    cpuPoints = cpuPoints + 10;
    var cpuScoreHeading = document.getElementById("cpuPoints");
    cpuScoreHeading.innerHTML = ("B: " + cpuPoints);
  }
}












function cpuBetOnPlayerOnesTurn(cIndex){
///////////////////////////playeronesTurn//////establish cpu bet////////
var cpuBet = document.getElementById('cpuBid');

if (playerOnesTurn && trump){
  cpuBidTracker = 1
  cpuBet.innerHTML = "1";
  cpuBet.style.opacity = "100%";
} else if (playerOnesTurn && !trump){
  if (cIndex > 10){
    cpuBidTracker = 0
    cpuBet.innerHTML = "0";
    cpuBet.style.opacity = "100%";
  } else {
    cpuBidTracker = 0
    cpuBet.innerHTML = "0";
    cpuBet.style.opacity = "100%";
  }
}

}



