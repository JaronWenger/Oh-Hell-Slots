var round = 1;
const Spades = ["2s.png","3s.png","4s.png","5s.png","6s.png","7s.png","8s.png","9s.png","10s.png","Js.png","Qs.png","Ks.png","As.png"];

///Clubs
const Clubs = ["2c.png","3c.png","4c.png","5c.png","6c.png","7c.png","8c.png","9c.png","10c.png","Jc.png","Qc.png","Kc.png","Ac.png"];

///Hearts
const Hearts = ["2h.png","3h.png","4h.png","5h.png","6h.png","7h.png","8h.png","9h.png","10h.png","Jh.png","Qh.png","Kh.png","Ah.png"];

///Diamonds
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

function establishLead() {
  //LEAD ESTABLISHED
var randomLead = Math.floor(Math.random() * 2);

if (randomLead === 0) {
  ///change lead
  var pLead = document.getElementById('pDot');
  pLead.style.backgroundColor = "rgb(0, 126, 40)";
  pLead.style.height = "60px";
  pLead.style.width = "60px";
  //reset oposite
  var cLead = document.getElementById('cDot');
  cLead.style.backgroundColor = "rgb(0, 0, 0)";
  cLead.style.height = "20px";
  cLead.style.width = "20px";
  cLead.style.top = "40px"

}else if (randomLead === 1) {
  //change lead
  var cLead = document.getElementById('cDot');
  cLead.style.backgroundColor = "rgb(0, 126, 40)";
  cLead.style.height = "60px";
  cLead.style.width = "60px";
  cLead.style.top = "25px";
  cpuBet()
  //reset oposite
  var pLead = document.getElementById('pDot');
  pLead.style.backgroundColor = "rgb(0, 0, 0)";
  pLead.style.height = "20px";
  pLead.style.width = "20px";
}
}

function cpuBet() {
  const tCard = shuffledDeck[2];
  const cCard = shuffledDeck[1];

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
  var cpuBet = document.getElementById('cpuBid');
  const index = suit.indexOf(cCard);

  if (tSuit === cSuit) {
    if (index > 0){
/////Bid 1
      cpuBet.innerHTML = "1";
      cpuBet.style.opacity = "100%";
    }else{
////Bid 0      
      cpuBet.innerHTML = "0";
      cpuBet.style.opacity = "100%";
    }

  } else {
    if (index > 9){
      /////Bid 1
            cpuBet.innerHTML = "1";
            cpuBet.style.opacity = "100%";
          }else{
      ////Bid 0      
            cpuBet.innerHTML = "0";
            cpuBet.style.opacity = "100%";
          }
  }
}






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


/////////////////////TRUMP CARD PRESSED/////////////////////////
function shuffleHands() {
  round++

  ////reset cpu bet
  var cpuBet = document.getElementById('cpuBid');
  cpuBet.innerHTML = "";
  cpuBet.style.opacity = "0%";



  var heading = document.getElementById("round");
  heading.innerHTML = ("ROUND: " + round);



  const shuffledDeck = shuffleDeck(deck);

  establishLead()

  playerDeal()

  trumpDeal()

  var cpuCard = document.getElementById('computer-card');
  cpuCard.src = "./images/bike.png";
}










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



function playRound(bid) {
  
  var cpuCard = document.getElementById('computer-card');

  if (cpuCard) {
    // Get a random index from the array
    var randomIndex = Math.floor(Math.random() * shuffledDeck.length);

    // Set the image source to the randomly chosen image path
    cpuCard.src = "./images/PNG-cards-1.3/" + shuffledDeck[1];
  }
}














